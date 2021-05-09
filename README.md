# CS6314-WPL-Project
![DEMO](../no_login.png)

# Pre Requisites
python 3.7 and above
Node and npm latest version.
For postgreSQL, pgAdmin 4 should be installed.
Database name and credentials should be updated in backend/settings.py

# Features
* Full featured shopping cart
* Product reviews and ratings
* Top products carousel
* Product pagination
* Product search feature
* User profile with orders
* Admin product management
* Admin user management
* Admin Order details page
* Mark orders as delivered option
* Checkout process (shipping, payment method, etc)
* PayPal / credit card integration


# Download & Setup Instructions

* 1 - Clone project: git clone https://github.com/monishshah18/CS6314-WPL-Project.git
* 2 - cd CS6314-WPL-Project
* 3 - Create virtual environment: virtualenv myenv
* 4 - myenv\scripts\activate
* 5 - pip install -r requirements.txt
* 6 - python manage.py runserver

# Install react modules
* 1 - cd frontend
* 2 - npm install
* 3 - npm start

# Setting up PostgreSQL Database
* 1 - Install PgAdmin4 and update database credentials in above mentioned files.
* 2 - python manage.py makemigrations would create models defined in backend/models.py
* 3 - python manage.py migrate would migrate any new changes to the Database.

# Creating a Superuser(Admin user)
* 1 - python manage.py createsuperuser
* 2 - Enter required details such as email, password and username.
* 3 - Hence, new Admin user is created successfully.