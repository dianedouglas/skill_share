export class Skill {
  constructor(
      public $key: string,
      public skill_name: string,
      public description: string,
      public userId: string
    ){

  }

static fromJsonList(arrayOfSkillObservables):Skill[] {
  return arrayOfSkillObservables.map(inputJsonSingleSkill =>
    Skill.fromJson(inputJsonSingleSkill));
}
  static fromJson({
    $key,
    skill_name,
    description,
    userId}):Skill {
  return new Skill($key, skill_name, description, userId);
  }
}