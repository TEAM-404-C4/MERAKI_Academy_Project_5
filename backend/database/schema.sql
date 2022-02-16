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
    Patient (firstName, lastName, phone, password, roleId)
VALUES
    ('iyad', 'saadeh', '0000', '123456', 3);

INSERT INTO
    Patient (firstName, lastName, phone, password, roleId)
VALUES
    ('omar', 'kataa', '0001', '123456', 3);

INSERT INTO
    Patient (firstName, lastName, phone, password, roleId)
VALUES
    ('mohmmad', 'Farhan', '0002', '123456', 3);

INSERT INTO
    Patient (firstName, lastName, phone, password, roleId)
VALUES
    ('bayan', 'Alsafdi', '0003', '123456', 3);

INSERT INTO
    Patient (firstName, lastName, phone, password, roleId)
VALUES
    ('huda', 'Not TA', '0004', '123456', 3);

INSERT INTO
    Patient (firstName, lastName, phone, password, roleId)
VALUES
    ('jozaa', 'CEO', '0005', '123456', 3);

INSERT INTO
    Patient (firstName, lastName, phone, password, roleId)
VALUES
    ('ghaidaa', 'TA', '0006', '123456', 3);

INSERT INTO
    Patient (firstName, lastName, phone, password, roleId)
VALUES
    ('Farhan', 'Mohaamd', '0007', '123456', 3);

INSERT INTO
    Patient (firstName, lastName, phone, password, roleId)
VALUES
    ('Issa', 'Alhls', '0008', '123456', 3);

INSERT INTO
    Patient (firstName, lastName, phone, password, roleId)
VALUES
    ('Haitham', 'Nawwaf', '0009', '123456', 3);

INSERT INTO
    Patient (firstName, lastName, phone, password, roleId)
VALUES
    ('Alaa', 'Marai', '0010', '123456', 3);

INSERT INTO
    Patient (firstName, lastName, phone, password, roleId)
VALUES
    ('Sara', 'Ahmad', '0011', '123456', 3);

INSERT INTO
    Patient (firstName, lastName, phone, password, roleId)
VALUES
    ('Rami', 'Nwaaf', '0012', '123456', 3);

INSERT INTO
    Patient (firstName, lastName, phone, password, roleId)
VALUES
    ('Ammar', 'kataa', '0013', '123456', 3);

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

-- ================================================// DoctorShowAppointment Data
-- INSERT INTO DoctorShowAppointment (appointmentId,doctorId) VALUES(1,1);
-- INSERT INTO DoctorShowAppointment (appointmentId,doctorId) VALUES(2,1);
-- INSERT INTO DoctorShowAppointment (appointmentId,doctorId) VALUES(3,1);
-- INSERT INTO DoctorShowAppointment (appointmentId,doctorId) VALUES(4,1);
-- INSERT INTO DoctorShowAppointment (appointmentId,doctorId) VALUES(5,1);
-- INSERT INTO DoctorShowAppointment (appointmentId,doctorId) VALUES(6,1);
-- INSERT INTO DoctorShowAppointment (appointmentId,doctorId) VALUES(7,1);
-- INSERT INTO DoctorShowAppointment (appointmentId,doctorId) VALUES(8,1);
-- INSERT INTO DoctorShowAppointment (appointmentId,doctorId) VALUES(9,1);
-- INSERT INTO DoctorShowAppointment (appointmentId,doctorId) VALUES(10,1);
-- INSERT INTO DoctorShowAppointment (appointmentId,doctorId) VALUES(11,1);
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

-- ====================================================//Doctors DATA
INSERT INTO
    doctor (
        fullName,
        email,
        password,
        profileImage,
        gender,
        status,
        Nationality,
        specialization,
        phone,
        workingDays,
        address,
        careersLicense,
        waitingTime,
        consultationFee,
        departmentId,
        cityId,
        roleId,
        ScientificCertificate
    )
VALUES
    (
        "HAITHAM NAWWAF",
        "haitham@yahoo.com",
        "123456",
        "https://doctorsstorageprod.blob.core.windows.net/117663/Profile/passport_cdb392e6-287f-4e1a-8a84-2fd00109fcd0.jpg?sv=2017-04-17&sr=b&si=PrivatePolicy&sig=kxTS5xwpaePJp0vegOBXPb%2F0gX%2FkIBwgio8MRg6IpFg%3D",
        "Male",
        "Single",
        "Jordanian",
        3,
        222,
        "sunday,monday,tuesday",
        "JORDAN,AMMAN",
        "none",
        "30 min",
        "10$",
        1,
        1,
        1,
        "none"
    );

INSERT INTO
    doctor (
        fullName,
        email,
        password,
        profileImage,
        gender,
        status,
        Nationality,
        specialization,
        phone,
        workingDays,
        address,
        careersLicense,
        waitingTime,
        consultationFee,
        departmentId,
        cityId,
        roleId,
        ScientificCertificate
    )
VALUES
    (
        "OMAR Kataa",
        "omardk@yahoo.com",
        "1234vcbvcb56",
        "https://doctorsstorageprod.blob.core.windows.net/117663/Profile/passport_cdb392e6-287f-4e1a-8a84-2fd00109fcd0.jpg?sv=2017-04-17&sr=b&si=PrivatePolicy&sig=kxTS5xwpaePJp0vegOBXPb%2F0gX%2FkIBwgio8MRg6IpFg%3D",
        "Male",
        "Single",
        "Jordanian",
        3,
        2222222222,
        "sunday,monday,tuesday",
        "JORDAN,AMMAN",
        "none",
        "30 min",
        "10$",
        1,
        1,
        1,
        "none"
    );

INSERT INTO
    doctor (
        fullName,
        email,
        password,
        profileImage,
        gender,
        status,
        Nationality,
        specialization,
        phone,
        workingDays,
        address,
        careersLicense,
        waitingTime,
        consultationFee,
        departmentId,
        cityId,
        roleId,
        ScientificCertificate
    )
VALUES
    (
        "Iyad Saadeh",
        "iyad@yahoo.com",
        "1234vcbvcb56",
        "https://firebasestorage.googleapis.com/v0/b/healthycare-5ffd5.appspot.com/o/image?alt=media&token=0822a5a6-5410-431e-af4d-df3fa5ed08b8",
        "Male",
        "Single",
        "Jordanian",
        3,
        3333333333,
        "sunday,monday,tuesday",
        "JORDAN,AMMAN",
        "none",
        "30 min",
        "10$",
        1,
        1,
        1,
        "none"
    );

INSERT INTO
    doctor (
        fullName,
        email,
        password,
        profileImage,
        gender,
        status,
        Nationality,
        specialization,
        phone,
        workingDays,
        address,
        careersLicense,
        waitingTime,
        consultationFee,
        departmentId,
        cityId,
        roleId,
        ScientificCertificate
    )
VALUES
    (
        "HAITHAM NAWWAF",
        "haitdham@yahoo.com",
        "1234vcbvcb56",
        "https://doctorsstorageprod.blob.core.windows.net/117663/Profile/passport_cdb392e6-287f-4e1a-8a84-2fd00109fcd0.jpg?sv=2017-04-17&sr=b&si=PrivatePolicy&sig=kxTS5xwpaePJp0vegOBXPb%2F0gX%2FkIBwgio8MRg6IpFg%3D",
        "Male",
        "Single",
        "Jordanian",
        3,
        4444444444,
        "sunday,monday,tuesday",
        "JORDAN,AMMAN",
        "none",
        "30 min",
        "10$",
        1,
        1,
        1,
        "none"
    );

INSERT INTO
    doctor (
        fullName,
        email,
        password,
        profileImage,
        gender,
        status,
        Nationality,
        specialization,
        phone,
        workingDays,
        address,
        careersLicense,
        waitingTime,
        consultationFee,
        departmentId,
        cityId,
        roleId,
        ScientificCertificate
    )
VALUES
    (
        "OMAR Kataa",
        "omark@yahoo.com",
        "1234vcbvcb56",
        "https://doctorsstorageprod.blob.core.windows.net/117663/Profile/passport_cdb392e6-287f-4e1a-8a84-2fd00109fcd0.jpg?sv=2017-04-17&sr=b&si=PrivatePolicy&sig=kxTS5xwpaePJp0vegOBXPb%2F0gX%2FkIBwgio8MRg6IpFg%3D",
        "Male",
        "Single",
        "Jordanian",
        3,
        5555555555,
        "sunday,monday,tuesday",
        "JORDAN,AMMAN",
        "none",
        "30 min",
        "10$",
        1,
        1,
        1,
        "none"
    );

INSERT INTO
    doctor (
        fullName,
        email,
        password,
        profileImage,
        gender,
        status,
        Nationality,
        specialization,
        phone,
        workingDays,
        address,
        careersLicense,
        waitingTime,
        consultationFee,
        departmentId,
        cityId,
        roleId,
        ScientificCertificate
    )
VALUES
    (
        "Iyad Saadeh",
        "iyzad@yahoo.com",
        "1234vcbvcb56",
        "https://doctorsstorageprod.blob.core.windows.net/117663/Profile/passport_cdb392e6-287f-4e1a-8a84-2fd00109fcd0.jpg?sv=2017-04-17&sr=b&si=PrivatePolicy&sig=kxTS5xwpaePJp0vegOBXPb%2F0gX%2FkIBwgio8MRg6IpFg%3D",
        "Male",
        "Single",
        "Jordanian",
        3,
        6666666666,
        "sunday,monday,tuesday",
        "JORDAN,AMMAN",
        "none",
        "30 min",
        "10$",
        1,
        1,
        1,
        "none"
    );

INSERT INTO
    doctor (
        fullName,
        email,
        password,
        profileImage,
        gender,
        status,
        Nationality,
        specialization,
        phone,
        workingDays,
        address,
        careersLicense,
        waitingTime,
        consultationFee,
        departmentId,
        cityId,
        roleId,
        ScientificCertificate
    )
VALUES
    (
        "HAITHAM NAWWAF",
        "zdzdz@yahoo.com",
        "1234vcbvcb56",
        "https://doctorsstorageprod.blob.core.windows.net/117663/Profile/passport_cdb392e6-287f-4e1a-8a84-2fd00109fcd0.jpg?sv=2017-04-17&sr=b&si=PrivatePolicy&sig=kxTS5xwpaePJp0vegOBXPb%2F0gX%2FkIBwgio8MRg6IpFg%3D",
        "Male",
        "Single",
        "Jordanian",
        3,
        7777777777,
        "sunday,monday,tuesday",
        "JORDAN,AMMAN",
        "none",
        "30 min",
        "10$",
        1,
        1,
        1,
        "none"
    );

INSERT INTO
    doctor (
        fullName,
        email,
        password,
        profileImage,
        gender,
        status,
        Nationality,
        specialization,
        phone,
        workingDays,
        address,
        careersLicense,
        waitingTime,
        consultationFee,
        departmentId,
        cityId,
        roleId,
        ScientificCertificate
    )
VALUES
    (
        "OMAR Kataa",
        "z@yahoo.com",
        "1234vcbvcb56",
        "https://doctorsstorageprod.blob.core.windows.net/117663/Profile/passport_cdb392e6-287f-4e1a-8a84-2fd00109fcd0.jpg?sv=2017-04-17&sr=b&si=PrivatePolicy&sig=kxTS5xwpaePJp0vegOBXPb%2F0gX%2FkIBwgio8MRg6IpFg%3D",
        "Male",
        "Single",
        "Jordanian",
        3,
        8888888888,
        "sunday,monday,tuesday",
        "JORDAN,AMMAN",
        "none",
        "30 min",
        "10$",
        1,
        1,
        1,
        "none"
    );

INSERT INTO
    doctor (
        fullName,
        email,
        password,
        profileImage,
        gender,
        status,
        Nationality,
        specialization,
        phone,
        workingDays,
        address,
        careersLicense,
        waitingTime,
        consultationFee,
        departmentId,
        cityId,
        roleId,
        ScientificCertificate
    )
VALUES
    (
        "Iyad Saadeh",
        "iydad@yahoo.com",
        "1234vcbvcb56",
        "https://doctorsstorageprod.blob.core.windows.net/117663/Profile/passport_cdb392e6-287f-4e1a-8a84-2fd00109fcd0.jpg?sv=2017-04-17&sr=b&si=PrivatePolicy&sig=kxTS5xwpaePJp0vegOBXPb%2F0gX%2FkIBwgio8MRg6IpFg%3D",
        "Male",
        "Single",
        "Jordanian",
        3,
        9999999999,
        "sunday,monday,tuesday",
        "JORDAN,AMMAN",
        "none",
        "30 min",
        "10$",
        1,
        1,
        1,
        "none"
    );

INSERT INTO
    doctor (
        fullName,
        email,
        password,
        profileImage,
        gender,
        status,
        Nationality,
        specialization,
        phone,
        workingDays,
        address,
        careersLicense,
        waitingTime,
        consultationFee,
        departmentId,
        cityId,
        roleId,
        ScientificCertificate
    )
VALUES
    (
        "Iyad Saadeh",
        "iyadd@yahoo.com",
        "1234vcbvcb56",
        "https://doctorsstorageprod.blob.core.windows.net/117663/Profile/passport_cdb392e6-287f-4e1a-8a84-2fd00109fcd0.jpg?sv=2017-04-17&sr=b&si=PrivatePolicy&sig=kxTS5xwpaePJp0vegOBXPb%2F0gX%2FkIBwgio8MRg6IpFg%3D",
        "Male",
        "Single",
        "Jordanian",
        3,
        9777999999,
        "sunday,monday,tuesday",
        "JORDAN,AMMAN",
        "none",
        "30 min",
        "10$",
        1,
        1,
        1,
        "none"
    );