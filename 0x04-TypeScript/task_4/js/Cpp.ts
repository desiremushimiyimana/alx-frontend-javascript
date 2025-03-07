// Cpp.ts
namespace Subjects {
    // Declaration merging: Add experienceTeachingC to Teacher interface
    export class Cpp extends Subject {
      getRequirements(): string {
        return 'Here is the list of requirements for Cpp';
      }
  
      getAvailableTeacher(): string {
        if (this.teacher.experienceTeachingC > 0) {
          return `Available Teacher: ${this.teacher.firstName}`;
        } else {
          return 'No available teacher';
        }
      }
    }
  }
  