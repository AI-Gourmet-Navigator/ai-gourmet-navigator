<!-- PROJECT LOGO -->
<div align="center">
  <img src="public/icons/ai-gourmet-navigator-logo.png" alt="Logo" width="90" >
  <h1>AI Gourmet Navigator</h1>
  <p>
    <a href="https://ai-gourmet-navigator.vercel.app/">View Live Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details align="right">
  <summary>Table of Contents</summary>
    <div><a href="#About-The-Project">About The Project</a></div>
        <div><a href="#Team Members">Team members</a></div>
    <div><a href="#Built-With">Built With</a></div>
    <div><a href="#Getting-Started">Getting Started</a></div>
    <div><a href="#Main-Features">Main Features</a></div>
    <div><a href="#how-we-organize-restaurant-data">How we organize restaurant data</a></div>
    <div><a href="#database-diagram">Database Diagram</a></div>
</details>

## About The Project

> AI Gourmet Navigator is a web application designed to allow users to search for restaurants in Vancouver, based on their current mood.  
> It provides a user-friendly interface for browsing, searching, and adding favorites.

<br/>

## Team Members

<table>
  <tr>  
    <td align="center">
      <a href="https://github.com/Lada496">
        <img src="https://avatars.githubusercontent.com/Lada496" width="100px;" alt="Yuko Murayama" /><br />
        <sub>
          <b>Yuko Murayama</b><br />
          <b>Frontend Developer</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/yuki-o1o5">
        <img src="https://avatars.githubusercontent.com/yuki-o1o5" width="100px;" alt="Yuki Kasugai" /><br />
        <sub>
          <b>Yuki Kasugai</b><br />
          <b>Frontend Developer</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<br/>

## Built With

- Frontend: Nextjs14, Typescript, Tailwind CSS, shadcn/ui, Storybook, Chromatic
- Backend: PostgreSQL, Prisma, Pinecorn
- Deployment: Neon
- Third-party: Cohere, Google Places API

<br/>

## Main Features

### 1. Using LLM (Cohere API) for Making Summaries and Converting Embed Data

- Make restaurant summaries using the Cohere API.
- Convert user preferences into embed data using the Cohere API.

<br>

### 2. Using Embed Data for Similarity Search

- Store the embed data in the Pinecone database.
- Use the embed data to find similar vectors in Pinecone.

<br>

### 3. Using Google Map API to Retrieve and Display Real Restaurant Data

- Fetch real restaurant data from the Google Map API.

<br>

## How we organize restaurant data

  <img src="public/others/AI-Gourmet-Navigator-Data-strategy.png" alt="Data strategy" width="700" >

## Database Diagram

  <img src="public/others/AI-Gourmet-Navigator-DB-diagram.png" alt="Data strategy" width="700" >
