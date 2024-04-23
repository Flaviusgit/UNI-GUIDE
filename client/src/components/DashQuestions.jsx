import { Modal, Table, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function DashQuestions() {
  const { currentUser } = useSelector((state) => state.user);
  const [userQuestions, setUserQuestions] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [questionIdToDelete, setQuestionIdToDelete] = useState('');


  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch(`/api/quiz/getQuestion`);
        const data = await res.json();
        if (res.ok) {
          setUserQuestions(data.questions);
          if (data.questions.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchQuestions();
    }
  }, [currentUser._id]);
  
  const handleShowMore = async () => {
    const startIndex = userQuestions.length; 
    try {
      const res = await fetch(
        `/api/quiz/getQuestion?startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserQuestions((prev) => [...prev, ...data.questions]);
        if (data.questions.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  

  const handleDeleteQuestion = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `/api/quiz/deleteQuestion/${questionIdToDelete}`,
        {
          method: 'DELETE',
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUserQuestions((prev) =>
          prev.filter((question) => question._id !== questionIdToDelete)
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      {currentUser.isAdmin && userQuestions.length > 0 ? (
        
        <>
        
          <Table hoverable className='shadow-md'>
            <Table.Head>
              <Table.HeadCell>Date updated</Table.HeadCell>
              <Table.HeadCell>Question content</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>
              <span>Edit</span>
            </Table.HeadCell>
           
            </Table.Head>
            {userQuestions.map((question) => (
              <Table.Body key={question._id} className='divide-y'>
                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell>{new Date(question.updatedAt).toLocaleDateString()}</Table.Cell>
                  <Table.Cell>{question.text}</Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setQuestionIdToDelete(question._id);
                      }}
                      className='font-medium text-red-500 hover:underline cursor-pointer'
                    >
                      Delete
                    </span>
                  </Table.Cell>
                     <Table.Cell>
                     <Link className = 'text-teal-500 hover:underline 'to={`/edit-question/${question._id}`}>
                      <span>Edit</span>
                      </Link>
                      </Table.Cell> 
                </Table.Row>
              </Table.Body>
              
            ))}
            
          </Table>

          {
          showMore && (
            
            <button onClick = {handleShowMore}className = 'w-full text-teal-500 self-center text-sm py-7'>
              Show more
            </button>
            
            
          )
        }
        </>
      ) : (
        <p>You have no questions yet</p>
      )}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size='md'
      >
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete this question?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleDeleteQuestion}>
                Yes, I'm sure
              </Button>
              <Button color='gray' onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
