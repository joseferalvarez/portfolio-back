import { person } from "../db/schema/person";
import { Database } from "../db/db";
import { asc, desc, eq } from "drizzle-orm";
import { socialAccount } from "../db/schema/social-account";
import { socialMedia } from "../db/schema/social-media";
import { profile } from "../db/schema/profile";
import { language } from "../db/schema/language";
import { project } from "../db/schema/project";
import { experience } from "../db/schema/experience";
import { company } from "../db/schema/company";
import { personTechnology } from "../db/schema/person_technology";
import { technology } from "../db/schema/technology";
import { education } from "../db/schema/education";

const database = Database.getInstance();

export class ProfileController {
  async getLanguageId(lang: string) {
    const languageId = await database.db
      .select()
      .from(language)
      .where(eq(language.iso, lang))
      .limit(1);

    if (!languageId) throw new Error("Language not found");

    return languageId;
  }

  async getProfileCard(id: string, lang: string) {
    const languageId = await this.getLanguageId(lang);

    const profileData = (
      await database.db
        .select()
        .from(person)
        .leftJoin(profile, eq(person.id, profile.person))
        .where(eq(person.id, id))
        .where(eq(profile.language, languageId[0].id))
    )[0];

    const socialAccounts = await database.db
      .select()
      .from(socialAccount)
      .leftJoin(socialMedia, eq(socialMedia.id, socialAccount.social_media))
      .where(eq(socialAccount.person, id))
      .where(eq(socialAccount.in_card, true));

    return {
      name: profileData.person.name,
      lastname: profileData.person.lastname,
      avatar: profileData.person.avatar,
      bio: profileData.profile.bio,
      curriculum: profileData.profile.curriculum,
      social_accounts: socialAccounts.map((account: any) => {
        return {
          name: account.social_media.name,
          url: account.social_account.url,
          icon: account.social_media.logo,
        };
      }),
    };
  }

  async getProfileSection(id: string, lang: string) {
    const languageId = await this.getLanguageId(lang);

    const profileData = await database.db
      .select()
      .from(profile)
      .where(eq(profile.person, id))
      .where(eq(profile.language, languageId[0].id));

    const socialAccounts = await database.db
      .select()
      .from(socialAccount)
      .leftJoin(socialMedia, eq(socialMedia.id, socialAccount.social_media))
      .where(eq(socialAccount.person, id))
      .where(eq(socialAccount.in_card, false));

    return {
      position: profileData[0].position,
      description: profileData[0].description,
      social_accounts: socialAccounts.map((account: any) => {
        return {
          name: account.social_media.name,
          url: account.social_account.url,
          icon: account.social_media.logo,
        };
      })
    };
  }

  async getProjectsSection(id: string, lang: string) {
    const languageId = await this.getLanguageId(lang);

    const projects = await database.db
      .select()
      .from(project)
      .where(eq(project.person, id))
      .where(eq(project.language, languageId[0].id));

    return projects.map((project: any) => {
      return {
        name: project.name,
        description: project.description,
        webpage: project.webpage,
        logo: project.logo,
      };
    });
  }

  async getExperience(id: string, lang: string) {
    const languageId = await this.getLanguageId(lang);

    const exps = await database.db
      .select()
      .from(experience)
      .leftJoin(company, eq(experience.company, company.id))
      .where(eq(experience.person, id))
      .where(eq(experience.language, languageId[0].id))
      .orderBy(desc(experience.init_date));

    if (!exps) throw new Error("Experience not found");

    const formattedExps = exps.map((exp: any) => {
      return {
        position: exp.experience.position,
        description: exp.experience.description,
        achievements: exp.experience.achievements,
        init_date: exp.experience.init_date,
        end_date: exp.experience.end_date ? exp.experience.end_date : null,
        company: {
          name: exp.company.name,
          webpage: exp.company.webpage,
          logo: exp.company.logo,
        }
      }
    });

    return formattedExps;
  }

  async getTechnologies(id: string) {

    const technologies = await database.db
      .select()
      .from(personTechnology)
      .leftJoin(technology, eq(personTechnology.technology, technology.id))
      .where(eq(personTechnology.person, id))
      .orderBy(
        asc(technology.name),
        desc(personTechnology.experience),
        desc(personTechnology.starred)
      );

    const getExperience = (expNumber: string) => {
      switch (Number(expNumber)) {
        case 1:
          return "Beginner";
        case 2:
          return "Intermediate";
        case 3:
          return "Advanced";
        case 4:
          return "Expert";
        default:
          return "Beginner";
      }
    }

    return technologies.map((tech: any) => {

      return {
        name: tech.technology.name,
        logo: tech.technology.logo,
        type: tech.technology.type,
        webpage: tech.technology.webpage,
        badge: tech.technology.badge,
        experience: getExperience(tech.person_technology.experience),
        starred: tech.person_technology.starred
      };
    });
  }

  async getEducation(id: string, lang: string) {
    const languageId = await this.getLanguageId(lang);

    const educations = await database.db
      .select()
      .from(education)
      .leftJoin(company, eq(education.company, company.id))
      .where(eq(education.person, id))
      .where(eq(education.language, languageId[0].id))
      .orderBy(desc(education.init_date));

    return educations.map((edu: any) => {
      return {
        name: edu.education.name,
        description: edu.education.description,
        init_date: edu.education.init_date,
        end_date: edu.education.end_date ? edu.education.end_date : null,
        company: {
          name: edu.company.name,
          webpage: edu.company.webpage,
          logo: edu.company.logo,
        }
      }
    })
  }
}
