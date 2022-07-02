const db = require("../db");
const {
  BadRequestError,
  UnauthorisedError,
  NotFoundError,
} = require("../utils/errors");

class Nutrition {
  static async makeNutrition(nutrition) {
    return {
      user_id: nutrition.user_id,
      name: nutrition.name,
      category: nutrition.calories,
      calories: nutrition.category,
      image_url: nutrition.image_url,
    };
  }

  static async createNutrition(nutrition) {
    const requiredFields = ["user_id", "name", "calories", "category", "image_url"];

    requiredFields.forEach((field) => {
      if (!nutrition.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body`);
      }
    });

    const result = await db.query(
      `
    INSERT INTO nutrition (
     user_id,
      name,
      calories,
      category,
      image_url
    )
    VALUES ($1,$2,$3,$4,$5)
    RETURNING user_id , name, calories ,category, image_url;
    `,
      [
        nutrition.user_id,
        nutrition.name,
        nutrition.calories,
        nutrition.category,
        nutrition.image_url,
      ]
    );
    const food = result.rows[0];
    return Nutrition.makeNutrition(food);
  }

  static async listNutritionUser(user) {
    if (!user) {
      throw new BadRequestError("No email provided");
    }
    const query = `SELECT * FROM nutrition WHERE user_id = $1`;

    const result = await db.query(query, [user]);

    const nutrition = result.rows;

    return nutrition;
  }

  static async fetchNutritionById(nutrition_id) {
    if (!nutrition_id) {
      throw new NotFoundError("No Id Found");
    }

    const query = `SELECT nutrition.name, nutrition.category, nutrition.calories, nutrition.image_url
        FROM nutrition WHERE nutrition.id = $1`;

    const result = await db.query(query, [nutrition_id]);

    const nutrition = result.rows[0];

    return nutrition;
  }
}

module.exports = Nutrition;
