export default class {
  constructor(id = undefined, firstName, lastName, email, password, username = null, websiteUrl = null, favourites = []) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.username = username;
      this.websiteUrl = websiteUrl;
      this.favourites = favourites;
  }
}
