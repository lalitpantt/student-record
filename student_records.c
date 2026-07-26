#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_LINE 256
#define FILE_NAME "students.txt"

void clearInput() {
    int c;
    while ((c = getchar()) != '\n' && c != EOF)
        ;
}

void pause() {
    printf("\nPress Enter to continue...");
    getchar();
}

void addStudent() {
    char name[100];
    char department[100];
    char gpa[16];
    char phone[32];
    char email[100];
    char father[100];
    char fatherPhone[32];
    char address[200];

    printf("Enter student name: ");
    fgets(name, sizeof(name), stdin);
    name[strcspn(name, "\n")] = '\0';

    printf("Enter department: ");
    fgets(department, sizeof(department), stdin);
    department[strcspn(department, "\n")] = '\0';

    printf("Enter GPA: ");
    fgets(gpa, sizeof(gpa), stdin);
    gpa[strcspn(gpa, "\n")] = '\0';

    printf("Enter student phone: ");
    fgets(phone, sizeof(phone), stdin);
    phone[strcspn(phone, "\n")] = '\0';

    printf("Enter student email: ");
    fgets(email, sizeof(email), stdin);
    email[strcspn(email, "\n")] = '\0';

    printf("Enter father name: ");
    fgets(father, sizeof(father), stdin);
    father[strcspn(father, "\n")] = '\0';

    printf("Enter father phone: ");
    fgets(fatherPhone, sizeof(fatherPhone), stdin);
    fatherPhone[strcspn(fatherPhone, "\n")] = '\0';

    printf("Enter address: ");
    fgets(address, sizeof(address), stdin);
    address[strcspn(address, "\n")] = '\0';

    FILE *file = fopen(FILE_NAME, "a");
    if (!file) {
        perror("Unable to open file");
        return;
    }
    fprintf(file, "%s|%s|%s|%s|%s|%s|%s|%s\n", name, department, gpa, phone, email, father, fatherPhone, address);
    fclose(file);
    printf("Student record saved successfully.\n");
}

void listStudents() {
    FILE *file = fopen(FILE_NAME, "r");
    if (!file) {
        printf("No student records found.\n");
        return;
    }

    char line[MAX_LINE];
    int index = 1;
    printf("\n%-4s %-20s %-18s %-5s %-15s %-22s %-15s %-30s\n", "No.", "Name", "Department", "GPA", "Phone", "Email", "Father", "Father Phone");
    printf("-----------------------------------------------------------------------------------------------------------------------------------------------------------\n");
    while (fgets(line, sizeof(line), file)) {
        char *name = strtok(line, "|");
        char *dept = strtok(NULL, "|");
        char *gpa = strtok(NULL, "|");
        char *phone = strtok(NULL, "|");
        char *email = strtok(NULL, "|");
        char *father = strtok(NULL, "|");
        char *fatherPhone = strtok(NULL, "|");
        char *address = strtok(NULL, "|\n");
        if (name && dept && gpa && phone && email && father && fatherPhone && address) {
            printf("%-4d %-20s %-18s %-5s %-15s %-22s %-15s %-30s\n", index++, name, dept, gpa, phone, email, father, fatherPhone);
            printf("     Address: %s\n", address);
        }
    }
    fclose(file);
}

void searchStudent() {
    char query[100];
    printf("Enter student name or department to search: ");
    fgets(query, sizeof(query), stdin);
    query[strcspn(query, "\n")] = '\0';

    FILE *file = fopen(FILE_NAME, "r");
    if (!file) {
        printf("No student records found.\n");
        return;
    }

    char line[MAX_LINE];
    int found = 0;
    printf("\nSearch results for '%s':\n", query);
    printf("%-4s %-20s %-18s %-5s %-15s %-22s %-15s %-30s\n", "No.", "Name", "Department", "GPA", "Phone", "Email", "Father", "Father Phone");
    printf("-----------------------------------------------------------------------------------------------------------------------------------------------------------\n");
    while (fgets(line, sizeof(line), file)) {
        char temp[MAX_LINE];
        strcpy(temp, line);
        char *name = strtok(temp, "|");
        char *dept = strtok(NULL, "|");
        char *gpa = strtok(NULL, "|");
        char *phone = strtok(NULL, "|");
        char *email = strtok(NULL, "|");
        char *father = strtok(NULL, "|");
        char *fatherPhone = strtok(NULL, "|");
        char *address = strtok(NULL, "|\n");
        if (name && dept && gpa && phone && email && father && fatherPhone && address) {
            if (strcasestr(name, query) || strcasestr(dept, query) || strcasestr(phone, query) || strcasestr(email, query) || strcasestr(father, query) || strcasestr(fatherPhone, query) || strcasestr(address, query)) {
                printf("%-4d %-20s %-18s %-5s %-15s %-22s %-15s %-30s\n", ++found, name, dept, gpa, phone, email, father, fatherPhone);
                printf("     Address: %s\n", address);
            }
        }
    }
    if (!found) {
        printf("No matching records found.\n");
    }
    fclose(file);
}

void deleteStudent() {
    listStudents();
    printf("\nEnter record number to delete: ");
    int number;
    if (scanf("%d", &number) != 1) {
        clearInput();
        printf("Invalid input.\n");
        return;
    }
    clearInput();

    FILE *file = fopen(FILE_NAME, "r");
    if (!file) {
        printf("No student records found.\n");
        return;
    }

    FILE *temp = fopen("temp.txt", "w");
    if (!temp) {
        perror("Unable to open temporary file");
        fclose(file);
        return;
    }

    char line[MAX_LINE];
    int current = 1;
    int deleted = 0;
    while (fgets(line, sizeof(line), file)) {
        if (current == number) {
            deleted = 1;
        } else {
            fputs(line, temp);
        }
        current++;
    }

    fclose(file);
    fclose(temp);

    if (deleted) {
        remove(FILE_NAME);
        rename("temp.txt", FILE_NAME);
        printf("Record deleted successfully.\n");
    } else {
        remove("temp.txt");
        printf("Record number not found.\n");
    }
}

int main(void) {
    while (1) {
        printf("\n=== Student Record Management ===\n");
        printf("1. Add student\n");
        printf("2. List students\n");
        printf("3. Search students\n");
        printf("4. Delete student\n");
        printf("5. Exit\n");
        printf("Choose an option: ");

        int option;
        if (scanf("%d", &option) != 1) {
            clearInput();
            printf("Invalid choice.\n");
            continue;
        }
        clearInput();

        switch (option) {
            case 1:
                addStudent();
                pause();
                break;
            case 2:
                listStudents();
                pause();
                break;
            case 3:
                searchStudent();
                pause();
                break;
            case 4:
                deleteStudent();
                pause();
                break;
            case 5:
                printf("Goodbye!\n");
                return 0;
            default:
                printf("Invalid option. Please try again.\n");
        }
    }
}
