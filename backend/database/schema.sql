-- ====================================================//Drop DataBase
Drop Database if exists HealthCare;

-- ====================================================//Create DataBase
CREATE Database HealthCare;

-- ====================================================//Use DataBase
Use HealthCare;

-- ====================================================//Create Role Table
Create Table Role(
    id int not null auto_increment primary key,
    Name varchar(255),
    is_deleted TINYINT Default 0
);

-- ====================================================//Create Admin Table
Create Table Admin(
    id int not null auto_increment primary key,
    email varchar(255) unique,
    password varchar(255),
    firstName varchar(255),
    lastName varchar(255),
    phone varchar(255),
    roleId int not null,
    FOREIGN Key(roleId) REFERENCES Role(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- ====================================================//Create Patient Table
Create Table Patient(
    id int not null auto_increment primary key,
    firstName varchar(255),
    lastName varchar(255),
    phone varchar(255) unique,
    password varchar(255),
    gender varchar(255),
    roleId int not null,
    is_deleted TINYINT Default 0,
    FOREIGN Key(roleId) REFERENCES Role(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- ====================================================//Create Medical Department Table
Create Table MedicalDepartment(
    id int not null auto_increment primary key,
    Name varchar(255),
    is_deleted TINYINT Default 0
);

-- ====================================================//Create City Table
Create Table City(
    id int not null auto_increment primary key,
    Name varchar(255),
    is_deleted TINYINT Default 0
);

Create Table Doctor(
    id int not null auto_increment primary key,
    fullName varchar(255),
    email varchar(255),
    password varchar(255),
    profileImage varchar(255),
    gender varchar(255),
    status varchar(255) default false,
    Nationality varchar(255),
    specialization varchar(255),
    phone varchar(255) unique,
    workingDays varchar(255),
    address varchar(255),
    careersLicense varchar(255),
    waitingTime varchar(255),
    consultationFee varchar(255),
    latitude varchar(255),
    longitude varchar(255),
    departmentId int not null,
    cityId int not null,
    roleId int not null,
    ScientificCertificate varchar(255),
    is_deleted TINYINT Default 0,
    FOREIGN Key(departmentId) REFERENCES MedicalDepartment(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN Key(cityId) REFERENCES City(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN Key(roleId) REFERENCES Role(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- ====================================================//Create Comment Table
Create table Comment(
    id int not null auto_increment primary key,
    comment varchar(255),
    rating int default 0,
    patientId int,
    doctorId int,
    is_deleted TINYINT Default 0,
    commentDate varchar(255),
    FOREIGN Key(patientId) REFERENCES Patient(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN Key(doctorId) REFERENCES Doctor(id) ON DELETE CASCADE ON UPDATE CASCADE
);

create table DayAppointment(
    id int not null auto_increment primary key,
    day varchar(255),
    is_deleted TINYINT Default 0
);

create table Appointment(
    id int not null auto_increment primary key,
    time varchar(255),
    is_deleted TINYINT Default 0
);

create table DoctorShowAppointment(
    id int not null auto_increment primary key,
    appointmentId int,
    doctorId int,
    is_deleted TINYINT Default 0,
    FOREIGN Key(appointmentId) REFERENCES Appointment(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN Key(doctorId) REFERENCES Doctor(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- ALTER Table healthcare.doctor_appointment MODIFY  Column dateAppointment DATE;
create table Doctor_Appointment(
    id int not null auto_increment primary key,
    is_Booking TINYINT default 0,
    doctorId int not null,
    appointmentId int not null,
    patientId int,
    day int,
    dateAppointment varchar(255),
    status varchar(255),
    FOREIGN Key(doctorId) REFERENCES Doctor(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN Key(appointmentId) REFERENCES Appointment(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN Key(day) REFERENCES DayAppointment(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN Key(patientId) REFERENCES Patient(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Feedback(
    id int not null auto_increment primary key,
    fullname varchar(255),
    email varchar(255),
    subject varchar(255),
    message varchar(255),
    
    is_deleted TINYINT default 0

);
-- ===========================================//Feedback Data
INSERT INTO Feedback (fullName,email,subject,message) VALUES ('omar Kataa','omar@yahoo.com','UI','very nice user interface');
INSERT INTO Feedback (fullName,email,subject,message) VALUES ('iyad saadeh','iyad@yahoo.com','Easy to use','Easy to use website '); 
INSERT INTO Feedback (fullName,email,subject,message) VALUES ('Haitham Nawwaf','Haitham@yahoo.com','Colors','nice colors'); 
INSERT INTO Feedback (fullName,email,subject,message) VALUES ('Bayan ','Bayan@yahoo.com','Css','woow so beautiful'); 
INSERT INTO Feedback (fullName,email,subject,message) VALUES ('Ghaidaa','ghaidaa@yahoo.com','Colors','You will need change colors example find Doctor'); 

-- =====================================================//Role DATA
Insert INTO
    Role (Name)
VALUES
    ('ADMIN');

Insert INTO
    Role (Name)
VALUES
    ('DOCTOR');

Insert INTO
    Role (Name)
VALUES
    ('PATIENT');

-- ==============================// Patient Data =============================
INSERT INTO
    Patient (firstName, lastName, phone, password,gender, roleId)
VALUES
    ('iyad', 'saadeh', '0000', '$2b$04$I3GkQmvKJCJYNtqQuEt3ue7bR.31/67wwwikwnemuvQsXY8P7GiM2',"MALE", 3);

INSERT INTO
    Patient (firstName, lastName, phone, password,gender, roleId)
VALUES
    ('omar', 'kataa', '0001', '$2b$04$I3GkQmvKJCJYNtqQuEt3ue7bR.31/67wwwikwnemuvQsXY8P7GiM2',"MALE", 3);

INSERT INTO
    Patient (firstName, lastName, phone, password,gender, roleId)
VALUES
    ('mohmmad', 'Farhan', '0002', '$2b$04$I3GkQmvKJCJYNtqQuEt3ue7bR.31/67wwwikwnemuvQsXY8P7GiM2',"MALE", 3);

INSERT INTO
    Patient (firstName, lastName, phone, password,gender, roleId)
VALUES
    ('bayan', 'Alsafdi', '0003', '$2b$04$I3GkQmvKJCJYNtqQuEt3ue7bR.31/67wwwikwnemuvQsXY8P7GiM2',"FEMALE", 3);

INSERT INTO
    Patient (firstName, lastName, phone, password,gender, roleId)
VALUES
    ('huda', 'Not TA', '0004', '$2b$04$I3GkQmvKJCJYNtqQuEt3ue7bR.31/67wwwikwnemuvQsXY8P7GiM2',"FEMALE", 3);

INSERT INTO
    Patient (firstName, lastName, phone, password,gender, roleId)
VALUES
    ('jozaa', 'CEO', '0005', '$2b$04$I3GkQmvKJCJYNtqQuEt3ue7bR.31/67wwwikwnemuvQsXY8P7GiM2',"MALE", 3);

INSERT INTO
    Patient (firstName, lastName, phone, password,gender, roleId)
VALUES
    ('ghaidaa', 'TA', '0006', '$2b$04$I3GkQmvKJCJYNtqQuEt3ue7bR.31/67wwwikwnemuvQsXY8P7GiM2',"FEMALE", 3);

INSERT INTO
    Patient (firstName, lastName, phone, password,gender, roleId)
VALUES
    ('Farhan', 'Mohaamd', '0007', '$2b$04$I3GkQmvKJCJYNtqQuEt3ue7bR.31/67wwwikwnemuvQsXY8P7GiM2',"MALE", 3);

INSERT INTO
    Patient (firstName, lastName, phone, password,gender, roleId)
VALUES
    ('Issa', 'Alhls', '0008', '$2b$04$I3GkQmvKJCJYNtqQuEt3ue7bR.31/67wwwikwnemuvQsXY8P7GiM2',"MALE", 3);

INSERT INTO
    Patient (firstName, lastName, phone, password,gender, roleId)
VALUES
    ('Haitham', 'Nawwaf', '0009', '$2b$04$I3GkQmvKJCJYNtqQuEt3ue7bR.31/67wwwikwnemuvQsXY8P7GiM2',"MALE", 3);

INSERT INTO
    Patient (firstName, lastName, phone, password,gender, roleId)
VALUES
    ('Alaa', 'Marai', '0010', '$2b$04$I3GkQmvKJCJYNtqQuEt3ue7bR.31/67wwwikwnemuvQsXY8P7GiM2',"MALE", 3);

INSERT INTO
    Patient (firstName, lastName, phone, password,gender, roleId)
VALUES
    ('Sara', 'Ahmad', '0011', '$2b$04$I3GkQmvKJCJYNtqQuEt3ue7bR.31/67wwwikwnemuvQsXY8P7GiM2',"FEMALE", 3);

INSERT INTO
    Patient (firstName, lastName, phone, password,gender, roleId)
VALUES
    ('Rami', 'Nwaaf', '0012', '$2b$04$I3GkQmvKJCJYNtqQuEt3ue7bR.31/67wwwikwnemuvQsXY8P7GiM2',"MALE", 3);

INSERT INTO
    Patient (firstName, lastName, phone, password,gender, roleId)
VALUES
    ('Ammar', 'kataa', '0013', '$2b$04$I3GkQmvKJCJYNtqQuEt3ue7bR.31/67wwwikwnemuvQsXY8P7GiM2',"MALE", 3);

-- ====================================================//CITY DATA
Insert INTO
    City (Name)
VALUES
    ('Amman');

Insert INTO
    City (Name)
VALUES
    ('IRBID');

Insert INTO
    City (Name)
VALUES
    ('ZARQA');

Insert INTO
    City (Name)
VALUES
    ('MAFRAQ');

Insert INTO
    City (Name)
VALUES
    ('AJLOUN');

Insert INTO
    City (Name)
VALUES
    ('JERASH');

Insert INTO
    City (Name)
VALUES
    ('MADABA');

Insert INTO
    City (Name)
VALUES
    ('BALQA');

Insert INTO
    City (Name)
VALUES
    ('KARAK');

Insert INTO
    City (Name)
VALUES
    ('TAFILEH');

Insert INTO
    City (Name)
VALUES
    ('MAAN');

Insert INTO
    City (Name)
VALUES
    ('AQABA');


-- =================================================// Day Appointment
Insert INTO
    DayAppointment (day)
VALUES
    ('sat');

Insert INTO
    DayAppointment (day)
VALUES
    ('sun');

Insert INTO
    DayAppointment (day)
VALUES
    ('mon');

Insert INTO
    DayAppointment (day)
VALUES
    ('tue');

Insert INTO
    DayAppointment (day)
VALUES
    ('wed');

Insert INTO
    DayAppointment (day)
VALUES
    ('thu');

-- =================================================// Appointment Data
Insert INTO
    Appointment (time)
VALUES
    ('9:00 am - 9:30 am');

Insert INTO
    Appointment (time)
VALUES
    ('9:30 am - 10:30 am');

Insert INTO
    Appointment (time)
VALUES
    ('10:00 am - 10:30 am');

Insert INTO
    Appointment (time)
VALUES
    ('10:30 am - 11:00 am');

Insert INTO
    Appointment (time)
VALUES
    ('11:00 am - 11:30 am');

Insert INTO
    Appointment (time)
VALUES
    ('11:30 am - 12:00 pm');

Insert INTO
    Appointment (time)
VALUES
    ('12:00 pm -12:30 pm');

Insert INTO
    Appointment (time)
VALUES
    ('12:30 pm - 1:00 pm');

Insert INTO
    Appointment (time)
VALUES
    ('1:00 pm - 1:30 pm');

Insert INTO
    Appointment (time)
VALUES
    ('1:30 pm - 2:00 pm');

Insert INTO
    Appointment (time)
VALUES
    ('2:00 pm - 2:30 pm');

Insert INTO
    Appointment (time)
VALUES
    ('2:30 pm - 3:00 pm');

Insert INTO
    Appointment (time)
VALUES
    ('3:00 pm - 3:30 pm');

Insert INTO
    Appointment (time)
VALUES
    ('3:30 pm - 4:00 pm');

Insert INTO
    Appointment (time)
VALUES
    ('4:00 pm - 4:30 pm');

Insert INTO
    Appointment (time)
VALUES
    ('4:30 pm - 5:00 pm');

-- ====================================================//MedicalDepartment DATA
Insert INTO
    MedicalDepartment (Name)
VALUES
    ('RADIOLOGY');

Insert INTO
    MedicalDepartment (Name)
VALUES
    ('LABORATORY');

Insert INTO
    MedicalDepartment (Name)
VALUES
    ('PHARMACY');

Insert INTO
    MedicalDepartment (Name)
VALUES
    ('SURGICAL');

Insert INTO
    MedicalDepartment (Name)
VALUES
    ('MEDICAL');

Insert INTO
    MedicalDepartment (Name)
VALUES
    ('PEDIATRIC');

Insert INTO
    MedicalDepartment (Name)
VALUES
    ('ORTHOPIDIC');

Insert INTO
    MedicalDepartment (Name)
VALUES
    ('OPHTHALMOLOGY');

Insert INTO
    MedicalDepartment (Name)
VALUES
    ('DEMATOLOGY');

Insert INTO
    MedicalDepartment (Name)
VALUES
    ('OB&GYN');

Insert INTO
    MedicalDepartment (Name)
VALUES
    ('DENTAL');

Insert INTO
    MedicalDepartment (Name)
VALUES
    ('PHYSIOTHERAPY');

Insert INTO
    MedicalDepartment (Name)
VALUES
    ('CARDIOLOGY');

Insert INTO
    MedicalDepartment (Name)
VALUES
    ('PHYCHIATRIC');

Insert INTO
    MedicalDepartment (Name)
VALUES
    ('NEUROLOGY');

Insert INTO
    MedicalDepartment (Name)
VALUES
    ('GENERAL DOCTOR');


    -- ===============================================
INSERT INTO doctor (fullName,email,password,profileImage,gender,status,Nationality,specialization,phone,workingDays,address,careersLicense,waitingTime,consultationFee,latitude,longitude,departmentId,cityId,roleId,ScientificCertificate)
VALUES
    (
'Iyad Anabtawi', 'Iyad@yahoo.com', '$2b$04$h06mCLcmxQ.tEvax8jIX1.SWfpTFBVUD8EUnsRr0obO3kG3ac4M9O', 'https://res.cloudinary.com/omarkataa/image/upload/v1645287940/project4/vmgd5zo5szkvj0i64jzd.jpg', 'MALE', '0', 'Jordan', 'Consultant General surgeon', '0790000011', 'Sunday-Tuesday', 'Amman', 'Consultant General surgeon', '50 min', '80', '31.9671713', '35.8740798', '10', '11', '2', 'Consultant General surgeon'    );
    INSERT INTO doctor (fullName,email,password,profileImage,gender,status,Nationality,specialization,phone,workingDays,address,careersLicense,waitingTime,consultationFee,latitude,longitude,departmentId,cityId,roleId,ScientificCertificate)
VALUES
    (
'Haitham Atoom', 'Hythm@yahoo.com', '$2b$04$xq8dbEQWzurjvE6.opyD.OX86WPOKWMZUWvRaegPp0LyEC5iI4Xiu', 'https://res.cloudinary.com/omarkataa/image/upload/v1645288156/project4/sxs8pdatodjyrw0535w4.jpg', 'MALE', '0', 'Jordan', 'Dentistry Specialist', '0790000012', 'Sunday-Tuesday', 'Amman', 'Dentistry Specialist', '50 min', '80', '31.9671713', '35.8740798', '12', '12', '2', 'Dentistry Specialist'    );
    -- ===================================================
INSERT INTO doctor (fullName,email,password,profileImage,gender,status,Nationality,specialization,phone,workingDays,address,careersLicense,waitingTime,consultationFee,latitude,longitude,departmentId,cityId,roleId,ScientificCertificate)
VALUES
    (
        'Amir Malkawi', 'amirM@yahoo.com', '$2b$04$I3GkQmvKJCJYNtqQuEt3ue7bR.31/67wwwikwnemuvQsXY8P7GiM2', 'https://res.cloudinary.com/omarkataa/image/upload/v1645285101/project4/gilabyrt8s28mtsizpqk.jpg', 'MALE', '0', 'Jordan', 'Pediatric Vascular Surgery', '0790000000', 'Sunday-Friday', 'Amman - Jordan ', 'Pediatric Vascular Surgery', '30 min', '50', '31.9455232', '35.9170048', '1', '1', '2', 'Consultant Vascular Surgery'
    );
-- ====================================================//Doctors DATA
INSERT INTO doctor (fullName,email,password,profileImage,gender,status,Nationality,specialization,phone,workingDays,address,careersLicense,waitingTime,consultationFee,latitude,longitude,departmentId,cityId,roleId,ScientificCertificate)
VALUES
    (
        'Tareq Massimi', 'Tareq@yahoo.com', '$2b$04$E89LbjWZqYsienGeNsdCtu0fram8pQnm/cpiEiEWAZH9G8nWid/Tm', 'https://res.cloudinary.com/omarkataa/image/upload/v1645285911/project4/vhhr3wlyhzsiybyyvamm.jpg', 'MALE', '0', 'Egypt', 'Adult Vascular Surgery', '0790000001', 'Sunday-Tuesday', 'Irbid', 'Consultant Vascular Surgery', '50 min', '60', '31.9455232', '35.9170048', '1', '1', '2', 'Consultant Vascular Surgery'
    );

INSERT INTO doctor (fullName,email,password,profileImage,gender,status,Nationality,specialization,phone,workingDays,address,careersLicense,waitingTime,consultationFee,latitude,longitude,departmentId,cityId,roleId,ScientificCertificate)
VALUES
    (
        'Izzedin Abushaikha', 'Izedin@yahoo.com', '$2b$04$f4SAD5rEeA8eed9Lo1Elcu3zz7J70HS0/w8ufA2EAElYnKFbrIUsq', 'https://res.cloudinary.com/omarkataa/image/upload/v1645286202/project4/keogtonsh8mr3iyrx8ly.jpg', 'MALE', '0', 'Iraq', 'Cosmetic Dermatology and Laser Specialist  ', '0790000002', 'Sunday-Tuesday', 'IRbid', 'Cosmetic Dermatology and Laser Specialist', '50 min', '80', '31.9671713', '35.8740798', '2', '3', '2', 'Cosmetic Dermatology and Laser Specialist'
    );

INSERT INTO doctor (fullName,email,password,profileImage,gender,status,Nationality,specialization,phone,workingDays,address,careersLicense,waitingTime,consultationFee,latitude,longitude,departmentId,cityId,roleId,ScientificCertificate)
VALUES
    (
        'Huda Al Qudah', 'HudaA@yahoo.com', '$2b$04$IKIZBKFObbjP5bFazb4K4u9xM4.DX8qqc9UgarCEaP815UlShjC2y', 'https://res.cloudinary.com/omarkataa/image/upload/v1645286863/project4/p2fwoi2tsitiugy1uuae.jpg', 'FEMALE', '0', 'Jordan', 'Dermatology ,  skin aesthetics, laser surgery and hair transplantation consultant ', '0790000003', 'Sunday-Tuesday', 'IRbid', 'Dermatology ,  skin aesthetics, laser surgery and hair transplantation consultant ', '50 min', '80', '31.9671713', '35.8740798', '2', '4', '2', 'Dermatology ,  skin aesthetics, laser surgery and hair transplantation consultant '
    );

INSERT INTO doctor (fullName,email,password,profileImage,gender,status,Nationality,specialization,phone,workingDays,address,careersLicense,waitingTime,consultationFee,latitude,longitude,departmentId,cityId,roleId,ScientificCertificate)
VALUES
    (
        'Nesrin Al Dabbas', 'Nesrin@yahoo.com', '$2b$04$qIi0FeEarjNZtbR1Fet6jOg0FmYiLLptVAMP44rDUD7n1TZBOgScO', 'https://res.cloudinary.com/omarkataa/image/upload/v1645286983/project4/c0gvua2vh0h1xxiid4gf.jpg', 'FEMALE', '0', 'Jordan', 'Psychiatry Specialist', '0790000004', 'Sunday-Tuesday', 'IRbid', 'Psychiatry Specialist', '50 min', '80', '31.9671713', '35.8740798', '3', '5', '2', 'Psychiatry Specialist'
    );

INSERT INTO doctor (fullName,email,password,profileImage,gender,status,Nationality,specialization,phone,workingDays,address,careersLicense,waitingTime,consultationFee,latitude,longitude,departmentId,cityId,roleId,ScientificCertificate)
VALUES
    (
        'Hanadi Wasfi Abdelhalim', 'Hanadi@yahoo.com', '$2b$04$3QEz76uJlI2rtnIk135O5uWsCATAWns8KQgFN6MOfBQynhq4Pk.LK', 'https://res.cloudinary.com/omarkataa/image/upload/v1645287128/project4/fpc2db7h8asautya8ikn.jpg', 'FEMALE', '0', 'Jordan', 'Dentist', '0790000005', 'Sunday-Tuesday', 'IRbid', 'Dentist', '50 min', '80', '31.9671713', '35.8740798', '4', '6', '2', 'Dentist'
    );

INSERT INTO doctor (fullName,email,password,profileImage,gender,status,Nationality,specialization,phone,workingDays,address,careersLicense,waitingTime,consultationFee,latitude,longitude,departmentId,cityId,roleId,ScientificCertificate)
VALUES
    (
        'Maha Haroon Alrabadi', 'Maha@yahoo.com', '$2b$04$Hi2o38Li1aMgR7cNbvxHb.VBIl5GdVFLTzF1IhSeAOe2zFXEPnufW', 'https://res.cloudinary.com/omarkataa/image/upload/v1645287228/project4/vosodnjfwijnigw1vok8.jpg', 'FEMALE', '0', 'Jordan', 'Gynecology and Infertility Specialist', '0790000006', 'Sunday-Tuesday', 'AJloun', 'Gynecology and Infertility Specialist', '50 min', '80', '31.9671713', '35.8740798', '6', '6', '2', 'Gynecology and Infertility Specialist'
    );

INSERT INTO doctor (fullName,email,password,profileImage,gender,status,Nationality,specialization,phone,workingDays,address,careersLicense,waitingTime,consultationFee,latitude,longitude,departmentId,cityId,roleId,ScientificCertificate)
VALUES
    (
        'Miral Nimri', 'Mira@yahoo.com', '$2b$04$5RBZ9Y3VrC7quNJvciYn1e6GjpRP1JUBi3Cmly/mEYNQJWapcO/OK', 'https://res.cloudinary.com/omarkataa/image/upload/v1645287389/project4/xwkuj5vnu1yxyw8loisf.jpg', 'FEMALE', '0', 'Jordan', 'Dermatology and Venereology Specialist', '0790000007', 'Sunday-Tuesday', 'MadAba', 'Dermatology and Venereology Specialist', '50 min', '80', '31.9671713', '35.8740798', '6', '7', '2', 'Dermatology and Venereology Specialist'
    );

INSERT INTO doctor (fullName,email,password,profileImage,gender,status,Nationality,specialization,phone,workingDays,address,careersLicense,waitingTime,consultationFee,latitude,longitude,departmentId,cityId,roleId,ScientificCertificate)
VALUES
    (
       'Alaa R Jabri', 'Alaa@yahoo.com', '$2b$04$9ZIkIDXuD1o5DT2pIij1qu7H190D..NpIRr8NiEtnTYytdYUV6C2K', 'https://res.cloudinary.com/omarkataa/image/upload/v1645287547/project4/vqggbwjundsy1j83huw6.jpg', 'FEMALE', '0', 'Jordan', 'Pediatrician and New Born', '0790000008', 'Sunday-Tuesday', 'MadAba', 'Pediatrician and New Born', '50 min', '80', '31.9671713', '35.8740798', '7', '8', '2', 'Pediatrician and New Born'
    );

INSERT INTO doctor (fullName,email,password,profileImage,gender,status,Nationality,specialization,phone,workingDays,address,careersLicense,waitingTime,consultationFee,latitude,longitude,departmentId,cityId,roleId,ScientificCertificate)
VALUES
    (
        'Afnan Adel Hamdan', 'Afnan@yahoo.com', '$2b$04$9ZIkIDXuD1o5DT2pIij1qu7H190D..NpIRr8NiEtnTYytdYUV6C2K', 'https://res.cloudinary.com/omarkataa/image/upload/v1645287547/project4/vqggbwjundsy1j83huw6.jpg', 'FEMALE', '0', 'Jordan', 'Pediatrician and New Born', '0790000078', 'Sunday-Tuesday', 'MadAba', 'Pediatrician and New Born', '50 min', '80', '31.9671713', '35.8740798', '7', '8', '2', 'Pediatrician and New Born'
    );

INSERT INTO doctor (fullName,email,password,profileImage,gender,status,Nationality,specialization,phone,workingDays,address,careersLicense,waitingTime,consultationFee,latitude,longitude,departmentId,cityId,roleId,ScientificCertificate)
VALUES
    (
       'Mohannad Abu Saadeh', 'Mohannad@yahoo.com', '$2b$04$Veub/9FTslydJRdbzcduou6gSZT4Bdm8PMzXFSMU4ERGQN5fCtp3O', 'https://res.cloudinary.com/omarkataa/image/upload/v1645287801/project4/xo1ivqivw8m4mxmgnflc.jpg', 'MALE', '0', 'Jordan', 'General Surgery Specialist', '0790000010', 'Sunday-Tuesday', 'Amman', 'Mohannad Abu Saadeh', '50 min', '80', '31.9671713', '35.8740798', '9', '10', '2', 'General Surgery Specialist'
    );
    -- ============================================================ Admin Data
    INSERT INTO admin (email,password,firstName,lastName,phone,roleId) VALUES ('eyadsaadeh77@gmail.com', '$2b$04$I3GkQmvKJCJYNtqQuEt3ue7bR.31/67wwwikwnemuvQsXY8P7GiM2', 'iyad', 'saadeh', '0101', '1')
