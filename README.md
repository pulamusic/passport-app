# NodeJS With Passport Authentication

This repository holds the code for a [Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA) YouTube video on [Passport authentication](https://youtu.be/6FOq4cUdH8k).

---

**FUCK**: As of 2019-09-28 this app doesn't work because there is something screwed up with the ejs module. I need to figure this out before moving on.
* Figured it out. I needed to have run `npm install ejs` in addition to installing `express-ejs-layouts`.
* (2019-09-30) The page is not rendering as if it is HTML, though. I'll need to sort this out.
* (2019-10-02) Got it. Moving on.


---

[`passport-auth` database](https://cloud.mongodb.com/v2/5d8f614dc56c9839eee37609#clusters)
* (2019-10-03) Can't login to online database
* Check out this [Stack Overflow issue](https://stackoverflow.com/questions/55683545/mongonetworkerror-connection-4-to-localhost27017-timed-out?noredirect=1&lq=1) for some ideas.
* **Damn it!** Compare my code with Traversy's code.
