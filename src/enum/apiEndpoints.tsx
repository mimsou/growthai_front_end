import RobotCard from "components/Pages/Audit/AuditCards/RobotCard";
import { ADD_DATA_ROBOT, ADD_DATA_SITEMAP } from "../store/actions/actionTypes";
import { SeoSubjectEnum } from 'enum/seoSubjectEnum';
import { ADD_AI_ROBOT_RESPONSE, ADD_AI_SITEMAP_RESPONSE} from 'store/actions/actionTypes';
import { CategoryEnum } from "enum/CategoryEnum";
import { IndexEnum } from "enum/dataIndexEnum";

export interface ApiEndpointConfig {
    category: CategoryEnum;
    apiEndPoint: string;
    type: string;
    icon: string;
    index: IndexEnum;
    title: string;
    seoSubject: SeoSubjectEnum;
    aiResponseType: string;
    renderContent: (data: any) => JSX.Element;
}

export const apiEndpoints: ApiEndpointConfig[] = [
  {
    category: CategoryEnum.SEO,
    apiEndPoint: 'seo/robots',
    type: ADD_DATA_ROBOT,
    index: IndexEnum.ROBOT_DATA,
    icon: 'BugAntIcon',
    title: "Audit for Robots Seo",
    seoSubject: SeoSubjectEnum.ROBOT,
    aiResponseType: ADD_AI_ROBOT_RESPONSE,
    renderContent: (data) => (
      <RobotCard data={data}></RobotCard>
    )
  },
  {
    category: CategoryEnum.SEO,
    apiEndPoint: 'seo/sitemap',
    type: ADD_DATA_SITEMAP,
    index: IndexEnum.SITEMAP_DATA,
    icon: 'BugAntIcon',
    title: "Audit for Sitemap Seo",
    seoSubject: SeoSubjectEnum.ROBOT,
    aiResponseType: ADD_AI_SITEMAP_RESPONSE,
    renderContent: (data) => (
    <></>
    )
  }
  // Add more endpoints here as needed
];