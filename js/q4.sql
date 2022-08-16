WITH t (STUDENT_ID, SUM_OF_MARKS) AS (SELECT DISTINCT STUDENT_ID, SUM(MARKS)
                                      FROM marks
                                      GROUP BY STUDENT_ID)
SELECT *
FROM t
where SUM_OF_MARKS > 500
ORDER BY STUDENT_ID DESC
