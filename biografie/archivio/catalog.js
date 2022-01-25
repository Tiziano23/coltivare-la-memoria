const url = new URL(location.href);
const requestId = url.searchParams.get("id");

const Catalog = {
    data() {
        return {
            name: null,
            surname: null,
            sex: null,
            birthday: null,
            deathdate: null,
            birthplace: null,
            occupation: null,
            recognition_date: null,
            location: null,
            content: null,
            authors: null,
        };
    },
    async created() {
        const res = await fetch(`/content/biographies/${requestId}.json`);
        const data = await res.json();
        this.name = data.person.name;
        this.surname = data.person.surname;
        this.sex = data.person.sex;
        this.birthday = data.person.birthday;
        this.deathdate = data.person.deathdate;
        this.birthplace = data.person.birthplace;
        this.occupation = data.person.occupation;
        this.recognition_date = data.person.recognition_date;
        this.location = data.story.location;
        this.content = data.story.content;
        this.authors = data.metadata.authors.reduce((a, i) => a + ", " + i);
    },
};

Vue.createApp(Catalog).mount("#app");
