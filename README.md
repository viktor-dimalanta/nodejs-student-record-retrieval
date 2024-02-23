<!-- Improved compatibility of back to top link: See: https://github.com/viktor-dimalanta/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- ABOUT THE PROJECT -->
## Node JS student Record Retrieval 

![image](https://github.com/viktor-dimalanta/nodejs-student-record-retrieval/assets/45250045/7e5adf39-9c6b-424a-aa62-32e0bdb14432)

The application developed to fetch students record in database using node and mysql


Tech Requirements:

*  Backend: MYSQL
*  Frontend: Node JS
*  Database: MySQL

System Design: 

* Outline a system architecture that includes a data storage component and an application layer. The system should 
be capable of storing student records and providing a mechanism to query them by ID. 
Each student record should at least contain the following attributes: id, name, email, and course.

Implementation: 

* Code the application layer to interact with the data storage, adhering to best practices in software development 
and design patterns suitable for your chosen stack. 
Implement functionality to retrieve a student's record by ID, ensuring the output includes all required student 
attributes. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* Install XAMPP or WAMPP
* run database

### Installation

_Follow the steps below to install the project in your local machine._

1. Clone the repo
   ```sh
   git clone https://github.com/viktor-dimalanta/nodejs-student-record-retrieval.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Adjust Database config goto config/database.js
   ```sh
   sample config

   const sequelize = new Sequelize('student_record', 'root', '', {
    host: 'localhost',
    dialect: 'mysql', // Specify MySQL dialect
    port: 3306, // Default MySQL port
    });
   ```
4. Create local database
   ```sh
   db name : student_record

   run following SQL

    CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    course VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

   ```
5. ADD dummy data
   ```sh
   INSERT INTO students (name, email, course, createdAt, updatedAt)
   VALUES
   ('John Doe', 'john.doe@example.com', 'Computer Science', NOW(), NOW()),
   ('Jane Smith', 'jane.smith@example.com', 'Mathematics', NOW(), NOW()),
   ('Alice Johnson', 'alice.johnson@example.com', 'Physics', NOW(), NOW()),
   ('Bob Brown', 'bob.brown@example.com', 'History', NOW(), NOW());
   ```

## How to Run

Open git bash and path to the project root folder (uses concurrent package for php artisan serve and npm run dev)

* npm start
* go to localhost:3000

## Fetching Student Record

[To test laravel function and features we will use the default testing found here

https://laravel.com/docs/10.x/testing](http://localhost:3000/students/1)

<!-- USAGE EXAMPLES -->

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/feature-name`)
3. Commit your Changes (`git commit -m 'Add some feature-name'`)
4. Push to the Branch (`git push origin feature/feature-name`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Viktor Angelo Dimalanta - dimalantaviktorangelo@gmail.com

Project Link: [[https://github.com/viktor-dimalanta](https://github.com/viktor-dimalanta/contact-task-manager)]

<p align="right">(<a href="#readme-top">back to top</a>)</p>






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/viktor-dimalanta/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/viktor-dimalanta/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/viktor-dimalanta/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/viktor-dimalanta/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/viktor-dimalanta/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/viktor-dimalanta/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/viktor-dimalanta/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/viktor-dimalanta/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/viktor-dimalanta/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/viktor-dimalanta/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/viktor-dimalanta
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Tailwind.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
