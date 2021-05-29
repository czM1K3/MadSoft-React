type Project = {
    name: string,
    url: string,
    img: string
};

export const projects: Project[] = [
    { 
        name: "DeltaTime",
        url: "http://delta-skola.cf/",
        img: "/static/img/projects/delta-time.webp"
    },
    { 
        name: "AzureBeers",
        url: "https://azurebeers.westeurope.cloudapp.azure.com/",
        img: "/static/img/projects/azure-beers.webp"
    },
    {
        name: "Hádej Číslo",
        url: "https://play.google.com/store/apps/details?id=com.maderamichal.hadejcislo",
        img: "/static/img/projects/think-number.webp"
    }
]