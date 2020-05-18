<template>
    <v-app>

        <v-container fluid class="ma-0 pa-0">
            <v-row justify="center" class="ma-0 pa-0">
                <v-col cols="12" md="8" class="ma-0 pa-0">
                    <v-app-bar color="blue-grey darken-3" dense dark>
                        <v-toolbar-title>{{profile.name}}</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn v-for="(contact_item, index) in profile.contact_items" :key="index" icon
                               :href="contact_item.link" :target="contact_item.target ? contact_item.target : '_parent'">
                            <v-icon>{{contact_item.icon}}</v-icon>
                        </v-btn>
                    </v-app-bar>
                </v-col>
            </v-row>

            <v-row justify="center" class="ma-0 pa-0">
                <v-col cols="12" md="4" class="ma-0 pa-0">
                    <v-card color="blue-grey darken-3" dark tile>
                        <v-card-title>
                            About me
                            <v-spacer></v-spacer>
                            <v-avatar size="80">
                                <v-img :src="require('./assets/profile.jpg')"></v-img>
                            </v-avatar>
                        </v-card-title>
                        <v-card-subtitle>{{profile.headline}}</v-card-subtitle>
                        <v-card-text>
                            <p>{{profile.description}}</p>
                        </v-card-text>
                        <v-card-title>Skills</v-card-title>
                        <v-card-text>
                            <v-slider v-for="skill in skills" :key="skill.name" readonly :value="skill.value"
                                      :prepend-icon="skill.icon" :label="skill.name"></v-slider>
                        </v-card-text>
                        <v-card-title>Contact</v-card-title>
                        <v-card-text>
                            <v-list-item v-for="contact_item in profile.contact_items" :key="contact_item.value"
                                         :href="contact_item.link"
                                         :target="contact_item.target ? contact_item.target : '_parent'">
                                <v-list-item-icon>
                                    <v-icon>{{contact_item.icon}}</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>{{contact_item.value}}</v-list-item-content>
                            </v-list-item>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4" class="indigo--text ma-0 pa-0">
                    <v-card tile>
                        <v-card-title>
                            <v-icon class="mr-2">mdi-briefcase</v-icon>
                            Experience
                        </v-card-title>
                        <v-card-text>
                            <v-list-item v-for="(job, index) in jobs" :key="index" three-line>
                                <v-list-item-content>
                                    <v-list-item-title>{{job.company}}</v-list-item-title>
                                    <v-list-item-title>{{job.title}}</v-list-item-title>
                                    <v-list-item-subtitle>{{job.dates}}</v-list-item-subtitle>
                                    <v-list-item-subtitle>{{job.description}}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card-text>
                        <v-card-title>
                            <v-icon class="mr-2">mdi-school</v-icon>
                            Education
                        </v-card-title>
                        <v-card-text>
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-title>University of Houston</v-list-item-title>
                                    <v-list-item-title>Bachelors of Science</v-list-item-title>
                                    <v-list-item-subtitle>2005 - 2007</v-list-item-subtitle>
                                    <v-list-item-subtitle>
                                        Major in Computer Science
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card-text>
                        <v-card-title>
                            <v-icon class="mr-2">mdi-heart</v-icon>
                            Interests
                        </v-card-title>
                        <v-card-text>
                            <v-list-item v-for="(interest, index) in interests" :key="index">
                                <v-list-item-content>
                                    <v-list-item-title>{{interest.title}}</v-list-item-title>
                                    <v-list-item-subtitle>{{interest.description}}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>

    export default {
        name: 'App',

        components: {},

        data: () => ({
            profile: {
                name: 'Patrick Ryan Purcell',
                headline: 'Dedicated to designing simple, elegant and effective solutions',
                description: 'I happen to be lucky enough to do what I love to do. Designing and creating helpful solutions to problems is not "work" to me but something I enjoy.',
                contact_items: [
                    {icon: 'mdi-phone', value: '281-733-9242', link: 'tel:281-733-9242'},
                    {
                        icon: 'mdi-email',
                        value: 'patrick.ryan.purcell@gmail.com',
                        link: 'mailto:patrick.ryan.purcell@gmail.com'
                    },
                    {
                        icon: 'mdi-linkedin',
                        value: 'https://www.linkedin.com/in/ryan-purcell-6ab1368/ ',
                        link: 'https://www.linkedin.com/in/ryan-purcell-6ab1368/ ',
                        target: '_blank'
                    },
                    {
                        icon: 'mdi-github',
                        value: 'https://github.com/ryandterri',
                        link: 'https://github.com/ryandterri',
                        target: '_blank'
                    },
                ]
            },
            skills: [
                {icon: 'mdi-nodejs', name: 'Node.js', value: 90},
                {icon: 'mdi-git', name: 'git', value: 80},
                {icon: 'mdi-account-lock', name: 'jwt', value: 90},
                {icon: 'mdi-database', name: 'mongodb', value: 85},
                {icon: 'mdi-vuejs', name: 'vue js', value: 70},
                {icon: 'mdi-vuetify', name: 'vuetify', value: 75},
                {icon: 'mdi-code-braces', name: 'C#', value: 85},
                {icon: 'mdi-database', name: 'Sql Server', value: 80},
                {icon: 'mdi-microsoft-azure', name: 'Azure', value: 65}
            ],
            jobs: [
                {
                    company: 'Stratum Reservoir',
                    title: 'IT Architect',
                    dates: 'January 2020 - Present',
                    description: 'Developing an api and frontend for serving analytical data for clients. Built with nodejs and mongodb and secured with jwt tokens.'
                },
                {
                    company: 'Gexa Energy',
                    title: 'IT Architect',
                    dates: 'August 2016 - January 2020',
                    description: 'Developing an api for 3rd party brokers to send us new client sign ups. One version in C# Mvc with Oracle and one using Node.js with mongodb. Secured with jwt tokens.'
                },
                {
                    company: 'Weatherford Labs',
                    title: 'IT Technical Architect',
                    dates: 'January 2015 - August 2016',
                    description: 'Created a web api for the internal LIMS system using C# and Sql Server. Also created a new frontend for the LIMS system using .Net Mvc and angularjs.'
                },
                {
                    company: 'Gexa Energy',
                    title: 'Tech Lead',
                    dates: 'January 2012 - January 2015',
                    description: 'Managed outcomes and expectations for projects assigned to my team. Team size consisted of 4-8 developers. Also created a new ui and backend for our commercial portal.'
                },
                {
                    company: 'Weatherford Labs',
                    title: 'Software Developer',
                    dates: 'November 2008 - January 2012',
                    description: 'Created / Upgraded our project management system from classic asp to .Net Mvc.'
                },
            ],
            interests: [
                {title: 'Tesla', description: 'Got mine in March of 2020 and I love it.'},
                {
                    title: 'CI/CD',
                    description: 'The simplicity of being able to check in code and have it build, test and deploy is amazing.'
                },
                {
                    title: 'Homemade Salsa',
                    description: 'Fresh ingredients. Great seasoning. Crisp chips. What else do you need?'
                },
            ]
        }),
    };
</script>
