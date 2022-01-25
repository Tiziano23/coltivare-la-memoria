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
        const res = await fetch(`../../content/biographies/${requestId}.json`);
        const data = await res.json();

        this.name = data.person.name;
        this.surname = data.person.surname;
        this.sex = data.person.sex;
        this.birthplace = data.person.birthplace;
        this.occupation = data.person.occupation;

        this.birthday = data.person.birthday.length > 4 ? new Date(data.person.birthday).toLocaleDateString() : data.person.birthday;
        this.death_date = data.person.death_date.length > 4 ? new Date(data.person.death_date).toLocaleDateString() : data.person.death_date;
        this.recognition_date = data.person.recognition_date.length > 4 ? new Date(data.person.recognition_date).toLocaleDateString() : data.person.recognition_date;

        this.content = data.story.content;
        this.category = data.story.category;
        this.location = data.story.location;
        this.pictures = data.story.attached.pictures;

        this.sources = data.metadata.sources.reduce((a, i) => a + ", " + i);
        this.authors = data.metadata.authors.reduce((a, i) => a + ", " + i);
    },
};

Vue.createApp(Catalog).mount("#app");
