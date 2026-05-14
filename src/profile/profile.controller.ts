import { person } from "../db/schema/person";
import { Database } from "../db/db";
import { eq } from "drizzle-orm";
import { socialAccount } from "../db/schema/social-account";
import { socialMedia } from "../db/schema/social-media";
import { profile } from "../db/schema/profile";
import { language } from "../db/schema/language";
import { project } from "../db/schema/project";

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
      .where(eq(socialAccount.person, id));

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

    return {
      position: profileData[0].position,
      description: profileData[0].description,
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

    const experience = await database.db
      .select()
      .from(profile)
      .where(eq(profile.person, id))
      .where(eq(profile.language, languageId[0].id));

    return experience;
  }
}
