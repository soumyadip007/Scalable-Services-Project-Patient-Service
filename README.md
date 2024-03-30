# Patient API Documentation

## Introduction

The Patient API allows you to manage patient records in a medical system. It provides endpoints for creating, reading, updating, and deleting patient information.

## Base URL

The base URL for accessing the Patient API is `http://localhost:3000/project/v1/patient`. Replace `http://localhost:3000` with the appropriate URL of your API server.

## Endpoints

### Create a Patient

- **URL:** `/project/v1/patient`
- **Method:** `POST`
- **Description:** Create a new patient record.
- **Request Body:**
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "dateOfBirth": "1980-05-20",
    "gender": "Male",
    "contactNumber": "1234567890",
    "address": "123 Main St, City, Country",
    "email": "john@example.com",
    "bloodType": "A+",
    "allergies": ["Peanuts", "Penicillin"],
    "emergencyContact": {
      "name": "Jane Doe",
      "relationship": "Spouse",
      "phoneNumber": "0987654321"
    }
  }
  ```
- **Response:** Returns the created patient record.

### Get All Patients

- **URL:** `/project/v1/patient`
- **Method:** `GET`
- **Description:** Get a list of all patient records.

### Get a Patient by ID

- **URL:** `/project/v1/patient/:id`
- **Method:** `GET`
- **Description:** Get a specific patient record by its ID.
- **Path Parameter:**
  - `:id` - The unique identifier of the patient.

### Update a Patient

- **URL:** `/project/v1/patient/:id`
- **Method:** `PUT`
- **Description:** Update an existing patient record.
- **Path Parameter:**
  - `:id` - The unique identifier of the patient.
- **Request Body:** JSON object containing fields to be updated.
- **Response:** Returns the updated patient record.

### Delete a Patient

- **URL:** `/project/v1/patient/:id`
- **Method:** `DELETE`
- **Description:** Delete a specific patient record by its ID.
- **Path Parameter:**
  - `:id` - The unique identifier of the patient.
- **Response:** Returns a success message upon successful deletion.

## cURL Examples

Below are some cURL examples demonstrating how to interact with the Patient API:

1. **Create a Patient:**
    ```bash
    curl -X POST \
      http://localhost:3000/project/v1/patient \
      -H 'Content-Type: application/json' \
      -d '{
        "firstName": "John",
        "lastName": "Doe",
        "dateOfBirth": "1980-05-20",
        "gender": "Male",
        "contactNumber": "1234567890",
        "address": "123 Main St, City, Country",
        "email": "john@example.com",
        "bloodType": "A+",
        "allergies": ["Peanuts", "Penicillin"],
        "emergencyContact": {
          "name": "Jane Doe",
          "relationship": "Spouse",
          "phoneNumber": "0987654321"
        }
    }'
    ```

2. **Get All Patients:**
    ```bash
    curl -X GET http://localhost:3000/project/v1/patient
    ```

3. **Get a Patient by ID:**
    ```bash
    curl -X GET http://localhost:3000/project/v1/patient/:id
    ```
   Replace `:id` with the ID of the patient you want to retrieve.

4. **Update a Patient:**
    ```bash
    curl -X PUT \
      http://localhost:3000/project/v1/patient/:id \
      -H 'Content-Type: application/json' \
      -d '{
        "firstName": "UpdatedName"
    }'
    ```
   Replace `:id` with the ID of the patient you want to update.

5. **Delete a Patient:**
    ```bash
    curl -X DELETE http://localhost:3000/project/v1/patient/:id
    ```
   Replace `:id` with the ID of the patient you want to delete.

## Error Handling

If an error occurs while processing a request, the API will return an appropriate HTTP status code along with a JSON response containing an error message.
