// import React, {useState, useCallback, useEffect} from "react";
// import axios from "axios";

// function Issue() {
//     const [issues, setIssues] = useState([]);

//     const getIssues = useCallback(async () => {
//         const res = await axios.get("http://43.200.121.200:3000/");
    
//         if (res.status === 200) {
//             // 데이터를 res.data 로 받아서 
//             // 맵에 표시할 수 있는 데이터로 가공하는 과정이 필요
//         }
//     });

//     useEffect( () => {
//         getIssues();
//     }, [getIssues]);
// }

// export default Issue;




// res.status(200).json({ success: true, message: "Issue-point list", data: issuePointList });


// axios.get(~생략~).then(res => {})

// res.data.success : ture
// res.data.message : "Issue-point list"
// res.data.data : [ 배열 ]