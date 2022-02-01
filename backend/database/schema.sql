Drop Database if exists HealthCare;

CREATE Database HealthCare;

Use HealthCare;

Create Table Role(
    id int not null auto_increment primary key,
    isDeleted TINYINT Default 0,
    Name varchar(255)
);

Create Table Admin(
    id int not null auto_increment primary key,
    email varchar(255),
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
    phone varchar(255),
    isDeleted TINYINT Default 0,
    roleId int not null,
    FOREIGN Key(roleId) REFERENCES Role(id) ON DELETE CASCADE ON UPDATE CASCADE,
    password varchar(255)
);

Create Table MedicalDepartment(
    id int not null auto_increment primary key,
    isDeleted TINYINT Default 0,
    Name varchar(255)
);

Create Table City(
    id int not null auto_increment primary key,
    isDeleted TINYINT Default 0,
    Name varchar(255)
);

Create Table Doctor(
    id int not null auto_increment primary key,
    email varchar(255),
    password varchar(255),
    profileImage varchar(255),
    gender varchar(255),
    status varchar(255),
    Nationality varchar(255),
    specialization varchar(255),
    isDeleted TINYINT Default 0,
    phone varchar(255),
    workingDays varchar(255),
    address varchar(255),
    careersLicense varchar(255),
    waitingTime varchar(255),
    consultationFee varchar(255),
    departmentId int not null,
    cityId int not null,
    roleId int not null,
    ScientificCertificate varchar(255),
    FOREIGN Key(departmentId) REFERENCES MedicalDepartment(id) ON DELETE CASCADE ON UPDATE CASCADE FOREIGN Key(cityId) REFERENCES City(id) ON DELETE CASCADE ON UPDATE CASCADE,
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