import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";   
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function DiaryList({data}){
    const nav = useNavigate();

    const [sortType, setSortType] = useState("latest"); 

    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    }

    // 최신순 , 오래된 수 변환
    const getSortedData = (data) => {
        return data.toSorted((a,b) => {
            if(sortType === "latest"){
                return a.createDate < b.createDate ? 1 : -1;
            }else{
                return a.createDate > b.createDate ? 1 : -1;
            }
        });
    }

    const sortedData = getSortedData(data);

    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select onChange = {onChangeSortType} value = {sortType}>
                    <option value ={"latest"} >최신순</option>
                    <option value ={"oldest"} >오래된순</option>
                </select>
            <Button onClick = {() => nav("/new")} text = {"새 읽기 쓰기"} type = {"POSITIVE"}/>
            </div>
            <div className="list_wrapper"></div>
            {sortedData.map((item) => <DiaryItem key={item.id} {...item} />)}
        </div>
    );
}

export default DiaryList;