const { Post } = require('../models');

const postData = [
    {
        title: "AngularJS reaches end of life",
        post_content: `Now that the AngularJS JavaScript framework has reached end-of-life (EOL) status, the developers behind the next-generation, TypeScript-based Angular framework hope users of the original will move forward with the successor. Originally released by Google in 2010, AngularJS reached EOL on December 31, with long-term support ceasing from the community. Users still can seek support from third parties including support services firms XLTS.dev and Perforce. The AngularJS source code still will be available on GitHub, via NPM, CDN, and Bower.`,
        user_id: 3
    },
    {
        title: "Dev corrupts NPM libs 'colors' and 'faker' breaking thousands of apps",
        post_content: `Users of popular open-source libraries 'colors' and 'faker' were left stunned after they saw their applications, using these libraries, printing gibberish data and breaking.
        Some surmised if the NPM libraries had been compromised, but it turns out there's much more to the story.
        The developer of these libraries intentionally introduced an infinite loop that bricked thousands of projects that depend on 'colors' and 'faker.'
        The colors library receives over 20 million weekly downloads on npm alone and has almost 19,000 projects relying on it. Whereas, faker receives over 2.8 million weekly downloads on npm, and has over 2,500 dependents.`,
        user_id: 1
    },
    {
        title: "Best VS code Extensions for Web Development",
        post_content: `Hello Guys today i am going to show you some VSCode Extension which helped me to boost my Productivity in Web Development(Specially frontend part as i am not familiar with backend).This post is for everyone including beginners.

        Lets get Started 1. HTML Snippets, 2. Intellisense for CSS classnames, 3. Emmet Live, 4. Javascript Booster, 5. Bootstrap 4`,
        user_id: 2

    },
    {
        title: "GitHub may replace DockerHub",
        post_content:  `It’s been interesting to witness the meteoric rise of “Docker” over the years, and it is undoubted that the technology that was pioneered and popularized by Docker (more correctly called “Linux Containers”), is here to stay for the long run. The rise of the technology was partially due to the ease of publishing containers, enabled by free DockerHub service. However, in this article, I propose that DockerHub as a single repository of container images is becoming less and less important than it once was, and in it’s place, GitHub is a strong contender to take over as the #1 repository for containers — as it has its sights on being everything a developer needs.`,
        user_id: 5
    },
    {
        title: "Prettier begins paying maintainers",
        post_content: `Prettier, an opinionated code formatter for JavaScript and many web languages, has been accepting donations at OpenCollective since 2019 and thanks to many generous donations we now have $50,000 in the bank! As a result, we are now able to pay the two active maintainers $1,500/month each. This funding will ensure that they will be able to continue consistent maintenance of Prettier into the future.`,
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;