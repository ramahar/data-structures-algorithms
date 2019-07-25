/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 *
 * https://leetcode.com/problems/course-schedule/description/
 *
 * algorithms
 * Medium (37.50%)
 * Likes:    1948
 * Dislikes: 91
 * Total Accepted:    234.2K
 * Total Submissions: 608.1K
 * Testcase Example:  '2\n[[1,0]]'
 *
 * There are a total of n courses you have to take, labeled from 0 to n-1.
 * 
 * Some courses may have prerequisites, for example to take course 0 you have
 * to first take course 1, which is expressed as a pair: [0,1]
 * 
 * Given the total number of courses and a list of prerequisite pairs, is it
 * possible for you to finish all courses?
 * 
 * Example 1:
 * 
 * 
 * Input: 2, [[1,0]] 
 * Output: true
 * Explanation: There are a total of 2 courses to take. 
 * To take course 1 you should have finished course 0. So it is possible.
 * 
 * Example 2:
 * 
 * 
 * Input: 2, [[1,0],[0,1]]
 * Output: false
 * Explanation: There are a total of 2 courses to take. 
 * To take course 1 you should have finished course 0, and to take course 0 you
 * should
 * also have finished course 1. So it is impossible.
 * 
 * 
 * Note:
 * 
 * 
 * The input prerequisites is a graph represented by a list of edges, not
 * adjacency matrices. Read more about how a graph is represented.
 * You may assume that there are no duplicate edges in the input
 * prerequisites.
 * 
 * 
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    class Course {
      constructor() {
        this.numPrerequisites = 0;  // # prereqs for course
        this.isPrerequisiteFor = [];   // If course is prereq for another course
        this.clear = false;   // Course cleared or not
      }
    }
    let courses = [];
    for (let i = 0; i < numCourses; i++) courses[i] = new Course();

    prerequisites.forEach(([a,b]) => {
      courses[a].numPrerequisites++;
      courses[b].isPrerequisiteFor.push(a);
    });

    let finished = 0;   // How many courses can be finished
    let prev = -1;    // Trace value of finished 

    // Terminate loop if we cannot find a new course to be finished in 1 iteration
    while (finished > prev) {
      prev = finished;

      for (let i = 0; i < numCourses; i++) {
        // Either no prereqs or all prereqs fulfilled 
        if (courses[i].numPrerequisites === 0 && !courses[i].clear) {
          //? Important 
          courses[i].isPrerequisiteFor.forEach((j) => {
            courses[j].numPrerequisites--;
          });
          courses[i].clear = true;
          finished++;
        }
      }
    }
    return finished === numCourses;
};
