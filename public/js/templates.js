const login = `<div class="landing-form" id="login">
            <h2>Already have an account? Sign in!</h2>
            {{# if error }}
            <p class="error">{{ error }}</p>
            {{/if}}
            <form id="login-form">
                <input type="text" name="username" placeholder="Username" required />
                <input type="password" name="password" placeholder="Password" required />
                {{ button type="submit" classes="btn btn-lrg btn-white btn-top-margin" innerText="Sign Up" }}
            </form>
        </div>`,
    registration = `<div class="landing-form" id="registration">
            <h2>Don't have an account? Register here!</h2>
            {{# if error }}
            <p class="error">{{ error }}</p>
            {{/if}}
            <form id="registration-form">
                <input type="text" name="username" placeholder="Username" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <input type="password" name="password2" placeholder="Verify Password" required />
                {{ button type="submit" classes="btn btn-lrg btn-white btn-top-margin" innerText="Register" }}
            </form>
        </div>`,
    navItem = `<a href="{{ link }}" class="nav-link">
            <li>{{ linkText }}</li>
        </a>`,
    popupOverlay = `<div class="hidden dark-overlay" id="task-popup">
        <div class="popup-content">
            {{ button type="button" classes="close" innerText="&times; Close" }}
            <div class='popup-inner'></div>
        </div>
    </div>`,
    taskForm = `<div id="taskform-container">
                <h2>Create New Task</h2>
                <form id="taskform" method="post">
                    <p>
                        <input type="text" name="name" placeholder="Task name" required />
                    </p>
                    <p id="due_date">
                        <label for="due_date">Due on</label>
                        <input type="date" name="due_date"/>
                        <label for="due_time"> at </label>
                        <input type="time" name="due_time"/>
                    </p>
                    <p id="is-completed">
                        <label for="completed">Completed?</label>
                        <input type="radio" name="completed" value="yes" />Yes
                        <input type="radio" name="completed" value="no" checked />No
                    </p>
                    <p>
                        <textarea name="note" placeholder="Other Information?"></textarea>
                    </p>
                    <p>
                        {{ button type="submit" classes="btn btn-white" innerText="Add new task" }}
                    </p>
                </form>
            </div>`,
    taskEditForm = `<div id="taskform-container">
                <h2>Edit Task</h2>
                <form id="taskform-edit" method="post">
                    <p>
                        <input type="text" name="name" placeholder="Task name" value="{{ task.title }}" required />
                    </p>
                    <p id="due_date">
                        <label for="due_date">Due on</label>
                        <input type="date" name="due_date" value="{{ task.due_day }}"/>
                        <label for="due_time"> at </label>
                        <input type="time" name="due_time" value="{{ task.due_time }}"/>
                    </p>
                    <p id="is-completed">
                        <label for="completed">Completed?</label>
                        <input type="radio" name="completed" value="yes" />Yes
                        <input type="radio" name="completed" value="no" checked />No
                    </p>
                    <p>
                        <textarea name="note" placeholder="Other Information?">{{{ task.note }}}</textarea>
                    </p>
                    <p>
                        {{ button type="submit" classes="btn btn-white" innerText="Update task" }}
                    </p>
                </form>
            </div>`,
    taskDetail = `<div id="taskdetail-container">
        <h2 class="task-title">{{ task.title }}</h2>
        {{#if task.due_date }}<p class="date-line">Due by: {{ task.due_date }}</p>{{/if}}
        <section>
            <h3>Notes</h3>
            <textarea readonly>{{#if task.note}}{{{ task.note }}}{{else}}There are no details for this task{{/if}}</textarea>
        </section>
        <section class="task-buttons" data="task-{{ task.id }}">
        {{ button type="button" classes="btn btn-white right delete-btn" innerText="Delete" }}
        {{ button type="button" classes="btn btn-white right complete-btn" innerText="Complete" }}
        {{ button type="button" classes="btn btn-white right edit-btn" innerText="Edit" }}
        </section>
    </div>`,
    taskList = `<div class="list-3">
        <h2>{{ title }}</h2>
        <div class="list-container">
            <table>
            {{#each rows }}
                {{ row this }}
            {{/each}}
            </table>
        </div>
    </div>`,
    profileBlock = `<div class="list-3" id="profile-block">
        <h1>Profile Info<h1>
        <h2>{{ user.firstname }} {{ user.lastname }}</h2>
        <p>{{ user.email }}</p>
        <section class="task-count">
            <p>Tasks To Go</p>
            <p class="indent">{{ tasksLeft }}</p>
        </section>
        <section class="task-count">
            <p>Tasks Overdue</p>
            <p class="indent">{{ overdue }}</p>
        </section>
        <section class="task-count">
            <p>Tasks Completed</p>
            <p class="indent">{{ completed }}</p>
        </section>
    </div>`,
    profileLists = `<div class="list-3 clear-bkg">
    </div>`,
    profileBtnBlock = `
        <div class="btn-block list-3 clear-bkg">
            <button type="button" class="btn-gray" id="new-task">Create a New Task</Button>
            <button type="button" class="btn-gray" id="edit-profile">Edit Profile</Button>
        </div>
    `
