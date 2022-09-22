import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {deleteVocabulary, findVocabulary, getAllVocabulary} from "../../Redux/apiVocabularyRequest";
import {useEffect} from "react";
import './style.css';
import ShowDetailPage from "./ShowDetail/ShowDetailPage";

const ShowAllVocabulary = () => {
    const [checkShowDetail, setCheckShowDetail] = useState(false);
    const [idVocaSelect, setIdVocaSelect] = useState();
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const idUser = useSelector(state => state.auth.login?.currentUser.user._id);
    const navigate = useNavigate();
    const language = searchParams.get('language');
    useEffect(() => {
        getAllVocabulary(searchParams.get('language'), dispatch, idUser);
    }, [searchParams.get('language'), dispatch, idUser, searchParams]);
    const x = useSelector(state => state.vocabulary.vocabulary.allVocabulary?.allVocabularies);

    const handleEdit = (e) => {
        const id = e.target.id;
        findVocabulary(dispatch, id);
        navigate(`/edit?language=${language}&id=${id}`);
    }

    const handleDelete = (e) => {
        const id = e.target.id;
        navigate('/delete');
        deleteVocabulary(dispatch, navigate, id, language);
    }

    const handleShowDetail = (id)=>{
        setCheckShowDetail(!checkShowDetail);
        setIdVocaSelect(id);
    }

    return (
<<<<<<< Updated upstream
        <div>
            <h1>{searchParams.get('language')}</h1>
            <Link to={`/add?language=${searchParams.get('language')}`}>Add</Link>
            {(searchParams.get('language')) ? (
                    <table border={"1"} width={"100%"}>
                        <thead>
                        <tr>
                            <th>Nghĩa gốc</th>
                            <th>Dịch</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {x?.map((eachs) => {
                            return (
                                <tr className={eachs._id} key={eachs._id}>
                                    <td><p>{eachs.original}</p></td>
                                    <td><p>{eachs.translate}</p></td>
                                    <td>
                                        <span id={eachs._id} onClick={handleEdit}>Edit</span>
                                    </td>
                                    <td><p onClick={handleDelete} id={eachs._id}>Delete</p></td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>)
                : (<div></div>)}
=======
        <div className={"show-all-vocabulary-container"}>
            {checkShowDetail ? <ShowDetailPage dataFromParent={idVocaSelect}/> : ""}
            <div className={"main-show-all-vocabulary-container"}>
                <h1 className={'title'}>{upcaseFirstLetter(searchParams.get('language'))}</h1>
                <div className={"feature-container"}>
                    <Link className={"button-add"} to={`/add?language=${searchParams.get('language')}`}>Add</Link>
                    <div className={"sort-container"}>
                        <span>Sort by: </span>
                        <select name="" id="">
                            <option value="">Original</option>
                            <option value="">Translated</option>
                            <option value="">Date added</option>
                        </select>
                    </div>
                </div>
                {(searchParams.get('language')) ? (
                        <table border={"1"} width={"100%"} className={"table-show-vocabulary"}>
                            <thead>
                            <tr>
                                <th className={"th-numerical-order"}>STT</th>
                                <th>Nghĩa gốc</th>
                                <th>Loại từ</th>
                                <th>Dịch</th>
                                <th>Nhóm từ</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {x?.map((eachs) => {
                                return (
                                    <tr className={eachs._id} key={eachs._id}>
                                        <td className={"stt"}>{stt++}</td>
                                        <td><span onClick={()=>{handleShowDetail(eachs._id)}}>{eachs.original}</span></td>
                                        <td className={"td-wordtype"}><p>{eachs.wordType ? (`(${eachs.wordType})`) : "" }</p></td>
                                        <td><p>{eachs.translate}</p></td>
                                        <td></td>
                                        <td className={"edit-feature"}>
                                            <span id={eachs._id} onClick={handleEdit}>Edit</span>
                                        </td>
                                        <td className={"delete-feature"}>
                                            <p onClick={handleDelete} id={eachs._id}>Delete</p>
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>)
                    : (<div></div>)}
            </div>
>>>>>>> Stashed changes
        </div>
    )
};

export default ShowAllVocabulary;
