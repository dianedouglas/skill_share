export class User {
  constructor(
      public $key: string,
      public username: string,
      public photo: string,
      public occupation: string,
      public location: string
    ){

  }

static fromJsonList(arrayOfUserObservables):User[] {
  return arrayOfUserObservables.map(inputJsonSingleUser =>
    User.fromJson(inputJsonSingleUser));
}
  static fromJson({
    $key,
    username,
    photo,
    occupation,
    location}):User {
  return new User($key, username, photo, occupation, location);
  }
}
