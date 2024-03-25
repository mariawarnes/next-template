import React from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

import type { IconProps } from '@/types';

const QuestionIcon = ({ customStyles, title }: IconProps) => {
  return <AiOutlineQuestionCircle className={customStyles} title={title} />;
};

export default QuestionIcon;
