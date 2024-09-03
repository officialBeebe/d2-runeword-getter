export interface IArmorStats {
  armor?: string[];
  helm?: string[];
  shield?: string[];
}

export interface IEquipmentStats {
  weapons?: string[];
  armors?: IArmorStats;
}

export interface IRuneProperties {
  id: number;
  createdWith?: string[];
  stats: IEquipmentStats;
  characterLevel: number;
}

export interface IRune {
  name: string;
  properties: IRuneProperties;
}


/* Example of a Rune

"el" : {
    "id" : 1,
    "created_with" : [],
    "stats" : {
        "weapons" : [
            "+50 Attack Rating",
            "+1 Light Radius"
        ],
        "armors" : {
            "armor" : [
                "+15 Defense",
                "+1 Light Radius"
            ],
            "helm" : [
                "+15 Defense",
                "+1 Light Radius"
            ],
            "shield" : [
                "+15 Defense",
                "+1 Light Radius"
            ]
        }
    },
    "character_level" : 11
}

*/
