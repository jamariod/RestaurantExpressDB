const db = require("./conn");

class RestaurantList {
    constructor(name, stars) {
        this.name = name;
        this.stars = stars;
    }
}

static async getAll() {
    try {
      const response = await db.any(`SELECT * FROM restaurant;`);
      return response;
    } catch (error) {
      console.error("ERROR", error);
      return error;
    }
  }
  static async getById(id) {
    try {
      const response = await db.any(`SELECT * FROM restaurant WHERE id = ${id}`);
      return response;
    } catch (error) {
      console.error("ERROR:", error);
      return error;
    }
  }
}
module.exports = ExecutiveList;