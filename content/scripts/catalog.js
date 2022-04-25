const url = new URL(location.href);
const requestId = url.searchParams.get("id");

const Catalog = {
    data() {
        return {
            name: null,
            surname: null,
            sex: null,
            birthplace: null,
            occupation: null,

            birthday: null,
            death_date: null,
            recognition_date: null,

            content: null,
            category: null,
            location: null,
            pictures: null,

            authors: null,
        };
    },
    async created() {
        const res = await fetch(`content/biographies/${requestId}.json`);
        const biography = await res.json();

        this.name = biography.person.name;
        this.surname = biography.person.surname;
        this.sex = biography.person.sex;
        this.birthplace = biography.person.birthplace;
        this.occupation = biography.person.occupation;

        this.birthday = biography.person.birthday !== "/" ? new Date(biography.person.birthday).toLocaleDateString("it-IT", { year: "numeric", month: "long", day: "numeric" }) : biography.person.birthday;
        this.death_date = biography.person.death_date !== "/" ? new Date(biography.person.death_date).toLocaleDateString("it-IT", { year: "numeric", month: "long", day: "numeric" }) : biography.person.death_date;
        this.recognition_date = biography.person.recognition_date !== "/" ? new Date(biography.person.recognition_date).toLocaleDateString("it-IT", { year: "numeric", month: "long", day: "numeric" }) : biography.person.recognition_date;

        this.content = biography.data.content.reduce((acc, el) => {
            return (acc += "<" + el.tag + ">" + el.content + "</" + el.tag + ">");
        }, "");

        this.category = biography.data.category;
        this.location = biography.data.location;
        this.pictures = biography.data.attached.pictures;

        this.sources = biography.metadata.sources.reduce((a, i) => a + ", " + i);
        this.authors = biography.metadata.authors.reduce((a, i) => a + ", " + i);
    },
};

Vue.createApp(Catalog).mount("#app");
