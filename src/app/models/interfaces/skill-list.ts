export interface ISkillList {
    frontend: ISkill[]
    backend: ISkill[]
    databases: ISkill[]
    extra: ISkill[]
}

interface ISkill {
    name: string
    logo: string
}