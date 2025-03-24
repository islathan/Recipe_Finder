class MealIdStorage {
  static localStorageKey = "mealIds";

  static addMealId(mealId) {
    const mealIds = this.getMealIds();
    mealIds.push(mealId);
    localStorage.setItem(this.localStorageKey, JSON.stringify(mealIds));
  }

  static removeMealId(mealId) {
    const storedIds = this.getMealIds();
    if (storedIds.includes(mealId)) {
      localStorage.setItem(
        this.localStorageKey,
        JSON.stringify(storedIds.filter((id) => id !== mealId)),
      );
      return true;
    }
    return false;
  }

  static getMealIds() {
    const storedIds = localStorage.getItem(this.localStorageKey);
    return storedIds ? JSON.parse(storedIds) : [];
  }

  static clearMealIds() {
    localStorage.removeItem(this.localStorageKey);
  }
}

export default MealIdStorage;
