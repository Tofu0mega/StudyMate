import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GETDATA } from '../../utils/APICalls';
import "./SubjectDetailPage.css";

export default function SubjectDetailPage() {
    const [SubjectData, setSubjectData] = useState();

    const { SubjectId } = useParams();

    useEffect(() => {
        const fetchSubject = async () => {
            try {
                const response = await GETDATA(`subject/${SubjectId}`);
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                const data = await response.json();
                const { subject } = data;
                setSubjectData(subject);
            } catch (error) {
                console.error(error);
            }
        };
        fetchSubject();
    }, [SubjectId]);

    return (
        <div className="subject-detail-page">
            {console.log(SubjectData)}
            {SubjectData && (
                <div className="subject-detail-container">
                    <h1 className="subject-name">{SubjectData.name}</h1>
                    <p className="subject-code">Subject Code: {SubjectData.code}</p>
                    <div className="subject-buttons">
                        <Link to={`/subject/${SubjectId}/notes`} className="subject-button">Notes</Link>
                        <Link to={`/subject/${SubjectId}/assignments`} className="subject-button">Assignments</Link>
                        <Link to={`/subject/${SubjectId}/solutions`} className="subject-button">Solutions</Link>
                        <Link to={`/subject/${SubjectId}/old-questions`} className="subject-button">Old Questions</Link>
                        <Link to={`/subject/${SubjectId}/video-notes`} className="subject-button">Video Notes</Link>
                    </div>
                </div>
            )}
        </div>
    );
}