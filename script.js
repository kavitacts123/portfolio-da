console.log("Portfolio Loaded 🚀");

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ===============================
// AOS Animation
// ===============================

AOS.init({
    duration: 1000,
    once: true
});


// ===============================
// OPEN / CLOSE AI
// ===============================

function toggleAI() {

    const box = document.getElementById("ai-box");

    if (box.style.display === "block") {
        box.style.display = "none";
    } else {
        box.style.display = "block";
    }
}


// ===============================
// AI CHAT
// ===============================

function send() {

    const input = document.getElementById("q");
    const chat = document.getElementById("chat");

    if (!input || !chat) {
        return;
    }

    const originalQuestion = input.value.trim();

    if (originalQuestion === "") {
        return;
    }

    const question = originalQuestion.toLowerCase().trim();

    let answer = "";


// ===============================
// GREETING
// ===============================

    if (
        question === "hi" ||
        question === "hello" ||
        question === "hey" ||
        question.includes("good morning") ||
        question.includes("good evening")
    ) {

        answer =
            "Hi! 👋 I'm Kavita's portfolio assistant. You can ask me about her skills, education, experience, certificates, projects or AI/ML interests.";
    }


// ===============================
// WHO IS KAVITA
// ===============================

    else if (
        question.includes("who is kavita") ||
        question.includes("about kavita") ||
        question.includes("tell me about kavita") ||
        question.includes("tell me about yourself") ||
        question.includes("who are you")
    ) {

        answer =
            "Kavita is an aspiring Data Analyst with hands-on experience in Excel, SQL, Power BI and Python. She also has frontend development experience with HTML, CSS, Bootstrap and Angular.";
    }


// ===============================
// CERTIFICATES
// IMPORTANT: BEFORE DATA ANALYST
// ===============================

    else if (
        question.includes("certificate") ||
        question.includes("certificates") ||
        question.includes("certification") ||
        question.includes("certifications")
    ) {

        // Data Analytics Certificate

        if (
            question.includes("data analytics") ||
            question.includes("data analyst") ||
            question.includes("theta")
        ) {

            answer =
                "Kavita has a Data Analytics Training Certificate from Theta Academy, Sector 34, Chandigarh. The training duration was 3 months and covered Excel for Data Analysis and Reporting, SQL for Data Extraction and Querying, Power BI Dashboard Development, and Python, Pandas and NumPy for Data Analysis.";

        }

        // Web Designing Certificate

        else if (
            question.includes("web") ||
            question.includes("web designing") ||
            question.includes("crest")
        ) {

            answer =
                "Kavita has a Web Designing Training Certificate from Crest Technosoft, Mohali, completed in 2024. The training covered HTML, CSS, Bootstrap, Responsive Design, Angular, Git and GitHub.";

        }

        // All Certificates

        else {

            answer =
                "Kavita has two certificates. First, a Data Analytics Training Certificate from Theta Academy, Sector 34, Chandigarh, completed over 3 months. It covered Excel, SQL, Power BI, Python, Pandas and NumPy. Second, a Web Designing Training Certificate from Crest Technosoft, Mohali, completed in 2024, covering HTML, CSS, Bootstrap, Angular, Git and GitHub.";
        }
    }


// ===============================
// DATA ANALYST
// ===============================

    else if (
        question.includes("data analyst") ||
        question.includes("data analysis") ||
        question.includes("analyst")
    ) {

        answer =
            "Kavita is currently focused on Data Analytics. She has completed a 3-month Data Analytics training from Theta Academy, Chandigarh, where she worked with Excel, SQL, Power BI, Python, Pandas and NumPy.";
    }


// ===============================
// SKILLS
// ===============================

    else if (
        question.includes("skills") ||
        question.includes("skill") ||
        question.includes("technologies") ||
        question.includes("technology") ||
        question.includes("what can she do") ||
        question.includes("what does she know")
    ) {

        answer =
            "Kavita's skills include SQL, Python, Pandas, NumPy, Power BI, Excel, HTML, CSS, Bootstrap and Angular. She also has experience with Git and GitHub.";
    }


// ===============================
// EXCEL
// ===============================

    else if (
        question.includes("excel") ||
        question.includes("vlookup") ||
        question.includes("xlookup") ||
        question.includes("pivot table") ||
        question.includes("pivot")
    ) {

        answer =
            "Kavita has experience using Excel for data cleaning and analysis. She has worked with Pivot Tables, dashboards, KPIs, slicers and interactive charts.";
    }


// ===============================
// SQL
// ===============================

    else if (
        question.includes("sql") ||
        question.includes("database") ||
        question.includes("query") ||
        question.includes("queries")
    ) {

        answer =
            "Kavita has learned SQL for data extraction, querying and analysis. She has practiced filtering, aggregation, GROUP BY, HAVING, joins and other SQL concepts.";
    }


// ===============================
// POWER BI
// ===============================

    else if (
        question.includes("power bi") ||
        question.includes("powerbi") ||
        question.includes("power-bi")
    ) {

        answer =
            "Kavita has created interactive Power BI dashboards with KPIs, sales trends, profit analysis and regional insights.";
    }


// ===============================
// PYTHON
// ===============================

    else if (
        question.includes("python") ||
        question.includes("pandas") ||
        question.includes("numpy") ||
        question.includes("matplotlib")
    ) {

        answer =
            "Kavita uses Python for data analysis and has worked with Pandas, NumPy and Matplotlib to analyze datasets and create visualizations.";
    }


// ===============================
// HTML CSS BOOTSTRAP
// ===============================

    else if (
        question.includes("html") ||
        question.includes("css") ||
        question.includes("bootstrap") ||
        question.includes("frontend") ||
        question.includes("front end")
    ) {

        answer =
            "Kavita has frontend development experience with HTML, CSS, Bootstrap and Angular. She has developed responsive and user-friendly web interfaces.";
    }


// ===============================
// ANGULAR
// ===============================

    else if (
        question.includes("angular") ||
        question.includes("typescript")
    ) {

        answer =
            "Kavita has frontend development experience using Angular and TypeScript. She worked on responsive UI components and client-based projects during her internship.";
    }


// ===============================
// EXPERIENCE
// ===============================

    else if (
        question.includes("experience") ||
        question.includes("work experience") ||
        question.includes("job experience")
    ) {

       answer = `
        Kavita's experience includes:<br><br>

        💼 <b>Web Designer Intern</b><br>
        Crest Technosoft, Mohali<br>
        December 2024 - March 2025<br>
        • Developed responsive UI using HTML, CSS and Angular.<br>
        • Worked on real-time client projects.<br>
        • Used Bootstrap for responsive design.<br>
        • Used Git & GitHub for version control.<br><br>

        💻 <b>Web Designer / Frontend Developer</b><br>
        Crest Technosoft, Mohali<br>
        December 2024 - March 2025<br>
        • Developed responsive and user-friendly web interfaces.<br>
        • Worked on real-time client-based projects and UI components.<br>
        • Implemented Bootstrap for responsive design.<br>
        • Used Git & GitHub for version control and collaboration.<br><br>

        📊 <b>Data Analytics Training</b><br>
        Theta Academy, Sector 34, Chandigarh<br>
        Duration: 3 Months<br>
        • Worked with Excel for data cleaning and analysis.<br>
        • Learned SQL for data extraction and querying.<br>
        • Created interactive dashboards using Power BI.<br>
        • Performed data analysis using Python, Pandas and NumPy.<br>
        • Completed real-world projects in Excel, Power BI and Python.
    `;
}


// ===============================
// INTERNSHIP
// ===============================

    else if (
        question.includes("internship") ||
        question.includes("crest technosoft") ||
        question.includes("crest")
    ) {

        answer =
            "Kavita worked as a Web Designer Intern at Crest Technosoft, Mohali, from December 2024 to March 2025. She worked with HTML, CSS, Angular, Bootstrap, Git and GitHub.";
    }


// ===============================
// DATA ANALYTICS TRAINING
// ===============================

    else if (
        question.includes("theta") ||
        question.includes("training") ||
        question.includes("course")
    ) {

        answer =
            "Kavita completed a 3-month Data Analytics training at Theta Academy, Sector 34, Chandigarh. She learned Excel, SQL, Power BI, Python, Pandas and NumPy.";
    }


// ===============================
// EDUCATION
// ===============================

    else if (
        question.includes("education") ||
        question.includes("qualification") ||
        question.includes("degree") ||
        question.includes("bca") ||
        question.includes("college") ||
        question.includes("university")
    ) {

        answer =
        answer = `
        Kavita's educational background is:<br><br>

        🎓 <b>Bachelor of Computer Applications (BCA)</b><br>
        Dev Samaj College for Women, Chandigarh<br>
        2021 - 2024<br><br>

        📚 <b>Senior Secondary (12th)</b><br>
        Govt. Model School, Sector 18-C, Chandigarh<br>
        2020 - 2021<br><br>

        📖 <b>Secondary (10th)</b><br>
        Govt. Model School, Karsan, Chandigarh<br>
        2018 - 2019
    `;
    }


// ===============================
// PROJECTS
// ===============================

else if (
    question.includes("project") ||
    question.includes("projects") ||
    question.includes("portfolio project")
) {

    // SALES DASHBOARD
    if (
        question.includes("sales") ||
        question.includes("power bi project") ||
        question.includes("sales dashboard")
    ) {

        answer = `
            📊 <b>Sales Dashboard - Power BI</b><br><br>

            Kavita created an interactive Sales Dashboard using Power BI.<br><br>

            <b>Key Features:</b><br>
            • KPI cards<br>
            • Sales trend analysis<br>
            • Profit analysis<br>
            • Regional performance analysis<br>
            • Interactive dashboard visualizations<br><br>

            The dashboard helps analyze sales performance and generate meaningful business insights.
        `;
    }


    // TRAFFIC ANALYSIS
    else if (
        question.includes("traffic") ||
        question.includes("traffic dashboard") ||
        question.includes("traffic analysis") ||
        question.includes("excel project")
    ) {

        answer = `
            🚦 <b>Traffic Analysis Dashboard - Excel</b><br><br>

            Kavita created a Traffic Analysis Dashboard using Microsoft Excel.<br><br>

            <b>Key Features:</b><br>
            • Data cleaning<br>
            • Pivot Tables<br>
            • KPIs<br>
            • Slicers<br>
            • Interactive charts<br>
            • Traffic trend analysis<br><br>

            The project helps analyze traffic patterns and identify useful insights from traffic data.
        `;
    }


    // PYTHON PROJECT
    else if (
        question.includes("python") ||
        question.includes("python project") ||
        question.includes("data analysis project")
    ) {

        answer = `
            🐍 <b>Python Data Analysis Project</b><br><br>

            Kavita worked on a data analysis project using Python.<br><br>

            <b>Technologies Used:</b><br>
            • Python<br>
            • Pandas<br>
            • NumPy<br>
            • Matplotlib<br><br>

            <b>Project Work:</b><br>
            • Data cleaning and preprocessing<br>
            • Data analysis<br>
            • Data visualization<br>
            • Identifying patterns and insights<br>
            • Generating business insights from data
        `;
    }


    // ALL PROJECTS
    else {

        answer = `
            Kavita has three projects showcased in her portfolio:<br><br>

            📊 <b>1. Sales Dashboard - Power BI</b><br>
            Interactive dashboard with KPIs, sales trends, profit analysis and regional insights.<br><br>

            🚦 <b>2. Traffic Analysis Dashboard - Excel</b><br>
            Excel dashboard with data cleaning, Pivot Tables, slicers, KPIs and interactive charts.<br><br>

            🐍 <b>3. Python Data Analysis Project</b><br>
            Data analysis using Python, Pandas, NumPy and Matplotlib with visualizations and business insights.
        `;
    }
}


// ===============================
// SALES DASHBOARD
// ===============================

    else if (
        question.includes("sales dashboard") ||
        question.includes("sales project")
    ) {

        answer =
            "The Sales Dashboard is a Power BI project featuring KPIs, sales trends, profit analysis and regional insights.";
    }


// ===============================
// TRAFFIC PROJECT
// ===============================

    else if (
        question.includes("traffic") ||
        question.includes("traffic dashboard") ||
        question.includes("traffic project")
    ) {

        answer =
            "The Traffic Analysis Dashboard is an Excel project that includes data cleaning, Pivot Tables, slicers, KPIs and interactive charts.";
    }


// ===============================
// PYTHON PROJECT
// ===============================

    else if (
        question.includes("python project") ||
        question.includes("python projects")
    ) {

        answer =
            "Kavita's Python project focuses on data analysis using Python, Pandas and Matplotlib. The project includes data visualization and business insights.";
    }


// ===============================
// AI / MACHINE LEARNING
// ===============================

    else if (
        question.includes("ai") ||
        question.includes("artificial intelligence") ||
        question.includes("machine learning") ||
        question.includes("machine-learning") ||
        question.includes(" ml")
    ) {

        answer =
            "Kavita is currently exploring AI and Machine Learning and is interested in integrating AI-powered features into web applications. This portfolio includes an AI-style assistant as part of that learning journey.";
    }


// ===============================
// GITHUB / GIT
// ===============================

    else if (
        question.includes("github") ||
        question.includes("git")
    ) {

        answer =
            "Kavita has experience using Git and GitHub for version control and collaboration during her frontend development work.";
    }


// ===============================
// CONTACT
// ===============================

    else if (
        question.includes("contact") ||
        question.includes("email") ||
        question.includes("hire") ||
        question.includes("reach") ||
        question.includes("how can i contact")
    ) {

        answer =
            "You can contact Kavita through the following: 📧 Email: ky630204@gmail.com | 💼 LinkedIn: https://www.linkedin.com/in/your-linkedin-profile | 💻 GitHub: https://github.com";
    }


// ===============================
// LOCATION
// ===============================

    else if (
        question.includes("location") ||
        question.includes("where is kavita") ||
        question.includes("where does she live") ||
        question.includes("chandigarh")
    ) {

        answer =
            "Kavita is based in Chandigarh, India.";
    }


// ===============================
// CAREER
// ===============================

    else if (
        question.includes("career") ||
        question.includes("career goal") ||
        question.includes("career objective") ||
        question.includes("looking for")
    ) {

        answer =
            "Kavita is focused on building her career as a Data Analyst. She is interested in working with Excel, SQL, Power BI and Python to analyze data and generate meaningful business insights.";
    }


// ===============================
// DEFAULT
// ===============================

    else {

        answer =
            "I'm here to answer questions about Kavita's skills, education, experience, certificates, projects and AI/ML interests. Try asking: 'What certificates does Kavita have?', 'Tell me about her skills', 'What projects has she done?', or 'Does she know Angular?'";
    }


// ===============================
// SHOW USER QUESTION + AI ANSWER
// ===============================

    chat.innerHTML += `
        <div style="margin-bottom:10px;">
            <b>You:</b> ${originalQuestion}
        </div>

        <div style="margin-bottom:15px;">
            <b>🤖 AI:</b> ${answer}
        </div>
    `;

    input.value = "";

    // Automatically scroll chat to bottom
    chat.scrollTop = chat.scrollHeight;
}

function closeAI() {
    const chatBox = document.getElementById("ai-box");

    if (chatBox) {
        chatBox.style.display = "none";
    }
}
// ===============================
// CLOSE CHATBOX WHEN CLICKING OUTSIDE
// ===============================

document.addEventListener("click", function (event) {

    const chatBox = document.getElementById("ai-box");
    const aiButton = document.getElementById("ai-btn");

    if (!chatBox || !aiButton) return;

    // Agar click chatbox ke andar ya AI button par nahi hua
    if (
        !chatBox.contains(event.target) &&
        !aiButton.contains(event.target)
    ) {
        chatBox.style.display = "none";
    }

});


// ===============================
// ENTER KEY TO SEND
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("q");

    if (input) {

        input.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {
                event.preventDefault();
                send();
            }

        });

    }

});