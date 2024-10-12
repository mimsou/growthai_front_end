import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import SimpleModal from 'components/Ui/Modals/SimpleModal';
import AskButton from 'components/Ui/AskButton';
import { ADD_AI_ROBOT_RESPONSE } from 'store/actions/actionTypes';
import { SeoSubjectEnum } from 'enum/seoSubjectEnum';

interface RobotCardProps {
  data: any
}

const RobotCard: React.FC<RobotCardProps> = ({ data }) => {
  const RetreavedDataRobot = useSelector(
    (state: RootState) => state.search.robot_data
  );
  const [showModal, setShowModal] = React.useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  return (
    <React.Fragment>
      {RetreavedDataRobot && (
        <>
          <div className="flex flex-col">
            <div className="flex items-center justify-normal">

              <span
                className={
                  RetreavedDataRobot.exist ? 'text-green-500' : 'text-red-500'
                }
              >
                {RetreavedDataRobot.exist ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </span>

              <p className="text-sm text-gray-500 ml-5">{RetreavedDataRobot.exist ? ('the Robot.text exist and it need some optimisations') : ('the Robot.text does not exist')}</p>
            </div>

            <div className="mt-4">

              <button
                className="bg-blue-400 hover:bg-blue-500 text-white font-semibold text-xs py-1 px-2 rounded-lg"
                onClick={handleShowModal}
              >
                Show Content
              </button>
              <AskButton seoSubject={SeoSubjectEnum.ROBOT} responseType={ADD_AI_ROBOT_RESPONSE} />
            </div>
          </div>
          <SimpleModal
            isOpen={showModal}
            onClose={handleHideModal}
            content={RetreavedDataRobot.content}
            title="Robot.txt Content"
          />
        </>
      )}
    </React.Fragment>
  );
};

export default RobotCard;