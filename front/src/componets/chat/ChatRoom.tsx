import React, {useState, useRef, useEffect} from "react";
import style from "./ChatRoom.module.scss";
import ChatMessage from './ChatMessage';
import classnames from 'classnames';

type Pprops = {
    className?: string;
};

type messageType = {
    id: string;
    nickname: string;
    text: string;
    imageSrc: string;
};

const DEMO_PROPS = {
    myId: '1',
    myNickname: '홍정민',
    myImageSrc: '#',
    messages: [
        {
            id: '1',
            nickname: '홍정민',
            text: '안녕하세요!',
            imageSrc: '#',
        },
        {
            id: '2',
            nickname: '이대경',
            text: '반가워요 이문제 해결하는데 도와줄 수 있나요?!',
            imageSrc: '#',
        },
        {
            id: '3',
            nickname: '박건호',
            text: 'ㅎㅎㅎㅎ 돈주실건가요?',
            imageSrc: '#',
        },
        {
            id: '1',
            nickname: '홍정민',
            text: '이방 재밌네요!',
            imageSrc: '#',
        },
    ]
}

const ChatRoom = ({className}: Pprops) => {
    // const {myId, messages} = DEMO_PROPS;
    const ulRef = useRef<HTMLUListElement>(null);
    const [messages, setMessage] = useState(DEMO_PROPS.messages);
    const [myId, setMyId] = useState(DEMO_PROPS.myId);

    useEffect(()=> {
  
    });

    const addMessage = (message: messageType) => {
        setMessage([...messages, message]);
        if(!ulRef.current) return;
        ulRef.current.scrollTop =  ulRef.current.scrollHeight;
        
    };

    const onKeyPress = (e: any) => {
        e.preventDefault();
        const target = e.target.querySelector('input');
        
        // TODO SEND API

        if(target.value === '' || target.value === null)
            return;
        addMessage({id:myId, nickname:'홍정민', text: target.value, imageSrc: '#'});
        target.value ='';
    };

    return (
        <div className={classnames(style.wrap, className)}>
            <ul ref={ulRef} className={style.message_wrap}>
                {messages.map((item,index)=> <li key={index} className={style.item}><ChatMessage myId={myId} message={item}/></li>)}
            </ul>
            <form className={style.message_form} onSubmit={onKeyPress}>
                <label htmlFor="input_message" className="blind">메시지</label>
                <input id="input_message" type="text" className={style.input_message} autoComplete="off" placeholder="메시지를 입력해주세요"/>
            </form>
        </div>
    )
}

export default ChatRoom;