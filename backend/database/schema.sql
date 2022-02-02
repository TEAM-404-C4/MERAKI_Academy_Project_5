Drop Database if exists HealthCare;

CREATE Database HealthCare;

Use HealthCare;

Create Table Role(
    id int not null auto_increment primary key,
    Name varchar(255),
    isDeleted TINYINT Default 0
);

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

Create Table Patient(
    id int not null auto_increment primary key,
    firstName varchar(255),
    lastName varchar(255),
    phone varchar(255) unique,
    password varchar(255),
    roleId int not null,
    isDeleted TINYINT Default 0,
    FOREIGN Key(roleId) REFERENCES Role(id) ON DELETE CASCADE ON UPDATE CASCADE
);

Create Table MedicalDepartment(
    id int not null auto_increment primary key,
    Name varchar(255),
    isDeleted TINYINT Default 0
);

Create Table City(
    id int not null auto_increment primary key,
    Name varchar(255),
    isDeleted TINYINT Default 0
);

Create Table Doctor(
    id int not null auto_increment primary key,
    firstName varchar(255),
    lastName varchar(255),
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
    departmentId int not null,
    cityId int not null,
    roleId int not null,
    ScientificCertificate varchar(255),
    isDeleted TINYINT Default 0,
    FOREIGN Key(departmentId) REFERENCES MedicalDepartment(id) ON DELETE CASCADE ON UPDATE CASCADE, 
    FOREIGN Key(cityId) REFERENCES City(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN Key(roleId) REFERENCES Role(id) ON DELETE CASCADE ON UPDATE CASCADE
);

Create table Comment(
    id int not null auto_increment primary key,
    comment varchar(255),
    rating int default 0,
    doctorId int not null,
    isDeleted TINYINT Default 0,
    FOREIGN Key(doctorId) REFERENCES Doctor(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- =============================================================


-- CITY DATA


Insert INTO City (Name) VALUES ('Amman');
Insert INTO City (Name) VALUES ('IRBID');
Insert INTO City (Name) VALUES ('ZARQA');
Insert INTO City (Name) VALUES ('MAFRAQ');
Insert INTO City (Name) VALUES ('AJLOUN');
Insert INTO City (Name) VALUES ('JERASH');
Insert INTO City (Name) VALUES ('MADABA');
Insert INTO City (Name) VALUES ('BALQA');
Insert INTO City (Name) VALUES ('KARAK');
Insert INTO City (Name) VALUES ('TAFILEH');
Insert INTO City (Name) VALUES ('MAAN');
Insert INTO City (Name) VALUES ('AQABA');



--  ROLE DATA

Insert INTO Role (Name) VALUES ('ADMIN');
Insert INTO Role (Name) VALUES ('DOCTOR');
Insert INTO Role (Name) VALUES ('PATIENT');


-- ====================================

-- MedicalDepartment DATA




Insert INTO MedicalDepartment (Name) VALUES ('RADIOLOGY');
Insert INTO MedicalDepartment (Name) VALUES ('LABORATORY');
Insert INTO MedicalDepartment (Name) VALUES ('PHARMACY');
Insert INTO MedicalDepartment (Name) VALUES ('SURGICAL');
Insert INTO MedicalDepartment (Name) VALUES ('MEDICAL');
Insert INTO MedicalDepartment (Name) VALUES ('PEDIATRIC');
Insert INTO MedicalDepartment (Name) VALUES ('ORTHOPIDIC');
Insert INTO MedicalDepartment (Name) VALUES ('OPHTHALMOLOGY');
Insert INTO MedicalDepartment (Name) VALUES ('DEMATOLOGY');
Insert INTO MedicalDepartment (Name) VALUES ('OB&GYN');
Insert INTO MedicalDepartment (Name) VALUES ('DENTAL');
Insert INTO MedicalDepartment (Name) VALUES ('PHYSIOTHERAPY');
Insert INTO MedicalDepartment (Name) VALUES ('CARDIOLOGY');
Insert INTO MedicalDepartment (Name) VALUES ('PHYCHIATRIC');
Insert INTO MedicalDepartment (Name) VALUES ('NEUROLOGY');
Insert INTO MedicalDepartment (Name) VALUES ('GENERAL DOCTOR');

