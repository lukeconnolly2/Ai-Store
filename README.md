# Ai-Store

The website is an AI Store that sells products online, and it is built using React, Java Spring Boot, HTML, Tailwind CSS, Docker, and MySQL for Web Development COMP30860. To access and order products, you need to create an account. Additionally, there is an exclusive admin dashboard that can be accessed using the login "root" and the password "root". The website features functionality, such as viewing products, adding new products, editing existing products, and checking out etc..

[link to wireframe](https://www.figma.com/proto/eCAlhQoFBoxvNIgEaDN0nZ/Stella?node-id=33%3A4&scaling=scale-down&page-id=0%3A1&starting-point-node-id=33%3A4)

### Members

- Keanan Alhouri
- Luke Connolly
- Stella Keany

INSTALLATION

-> Prerequisites

* [Node.JS](https://nodejs.org/en/download) - DOWNLOAD NPM PACKAGE WHILE INSTALLING NODEJS - (To install and use React, you will need Node.js installed to your computer.)

* [Docker](https://www.docker.com/products/docker-desktop/)

* [Maven](https://maven.apache.org/download.cgi)

->  How to Run

In Root-Directory(AI-Store folder), do these following steps in order:
1. inside terminal, type ```docker compose up```
2. Run BackendApplication.java (backend/src/main/java/com/aistore/backend/BackendApplication.java)
3. Open a NEW terminal, type ```npm install```, NOTE: make sure your npm is configured to the path package-lock.json(found inside frontend folder)
4. type ```npm run dev``` in the same terminal as npm install
5. Access website through the localhost link given by npm run dev
