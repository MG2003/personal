export interface BlurbInfo{
    company: string,
    location: string,
    order: string,
    review: string
}

    /*
                    <ul>
                    <li>ten one</li>
                    <li>tiger sugar</li>
                    <li>kung fu</li>
                    <li>vivi's</li>
                    <li>machi machi</li>
                    <li>quickly</li>
                    <li>moge tee</li>
                    <li>mr. wish</li>
                    <li>gong cha</li>
                    <li>debutea</li>
                    <li>bambu</li>
                </ul>
    */

const BLURBITEMS:   BlurbInfo[] = [
    {
        company: "ten one",
        location: "providence",
        order: "osmanthus milk tea + honey white boba, no sugar",
        review: "so so so good"
    },
    {
        company: "kung fu tea",
        location: "providence/edison",
        order: "kung fu milk tea w/ bubbles, no sugar",
        review: "so so so good"
    },
    {
        company: "quickly",
        location: "san francisco",
        order: "classic milk tea",
        review: "so so so good"
    },

]


interface projectInfo{
    id: number,
    title: string,
    thumb: string,
    imgs: string[],
    tags: string[],
    blurb: string
}

interface tag{
    id: number,
    t: string
}

const Tags: tag[] = [
    
    {id: 0, t: "hi"},
    {id: 1, t: "bye"} , 
    {id: 2, t: "lie"}


]


const PROJECTS: projectInfo[] = [
    {
        id: 1,
        title: "kebash!",
        thumb: "assets/project_img/kebash_thumbnail.png",
        imgs: [],
        tags: ["game dev", "C#", "Unity"],
        blurb: "my first game with the brown risd game developers! kebash! is a chaotic party game where up to 4 players can play as small, animated kebab sticks that run around shooting their food at others. i implemented some pretty key features, such as the ui for each kebab stick's stamina meter, a la breath of the wild, as well as a game manager to manage all the different menus and scenes the player navigates through."

    }
]

function getProjectById(id: number) {
    return PROJECTS.find((image) => image.id === id);
  }


export{
    BLURBITEMS, Tags, PROJECTS, getProjectById
};