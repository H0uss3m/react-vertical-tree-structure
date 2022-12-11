export interface FileNode {
  index?: number;
  type: string;
  name: string;
  children?: FileNode[];
  node?: any;
}

export const root: FileNode = {
  type: "Company",
  name: "Bernard Nicod Company ",
  children: [
    {
      type: "Filial",
      name: "Filial FR",
      children: [
        {
          type: "Agency",
          name: "Agency FR Paris",
          children: [
            { type: "Department", name: "Commercial rent" },
            { type: "Department", name: "Sale" },
            { type: "Department", name: "Commercial Sale" }
          ]
        },
        {
          type: "Agency",
          name: "Agency FR Toulon"
          //   children: [{
          //     type: "Department",
          //     name: "Commercial rent"
          //   },
          //   {
          //     type: "Department",
          //     name: "Commercial Sale"
          //   },
          // ]
        },
        {
          type: "Agency",
          name: "Agency FR Lyon"
          //   children: [{
          //     type: "Department",
          //     name: "Commercial rent"
          //   },
          //   {
          //     type: "Department",
          //     name: "Commercial Sale"
          //   },
          // ]
        }
      ]
    },
    {
      type: "Filial",
      name: "Filial UK",
      children: [
        {
          type: "Agency",
          name: "Agency UK liverpool",
          children: [
            {
              type: "Department",
              name: "Rent"
            },
            {
              type: "Department",
              name: "Sale Rent"
            }
          ]
        },
        {
          type: "Agency",
          name: "Agency UK Mun"
        }
      ]
    },
    {
      type: "Filial",
      name: "Filial SWISS",
      children: [
        {
          type: "Agency",
          name: "Agency SWISS ",
          children: [
            {
              type: "Department",
              name: "Department SWISS_1"
            },
            {
              type: "Department",
              name: "Department SWISS_2"
            }
          ]
        }
      ]
    }
  ]
};

export const myData: FileNode = {
  type: "Filial",
  name: "Bernard Nicod FR",
  children: [
    {
      type: "Agency",
      name: "Agency FR Maeseille",
      children: [
        { type: "Department", name: "Commercial Sales" },
        { type: "Department", name: "Commercial rent" },
        { type: "Department", name: "Commercial 3" }
      ]
    },
    {
      type: "Agency",
      name: "Agency FR Toulon"
    },
    {
      type: "Agency",
      name: "Agency FR Paris"
    }
  ]
};
