/*
 * Copyright 2025 coze-dev Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
import { useState } from 'react';

import { I18n } from '@coze-arch/i18n';
import { IconCozArrowDown } from '@coze-arch/coze-design/icons';
import {
  RadioGroup,
  Typography,
  Radio,
  AIButton,
  Popover,
} from '@coze-arch/coze-design';

import css from './generate-mode-select.module.less';

export enum GenerateMode {
  Complete,
  Cover,
}

interface GenerateModeSelectProps {
  value: GenerateMode;
  disabled?: boolean;
  className?: string;
  onChange: (v: GenerateMode) => void;
}

export const GenerateModeSelect: React.FC<GenerateModeSelectProps> = ({
  value,
  onChange,
  ...props
}) => {
  const [popoverVisible, setPopoverVisible] = useState(false);

  const handleChange = (v: GenerateMode) => {
    onChange(v);
    handleClose();
  };
  const handleToggle = (v: boolean) => {
    v ? handleOpen() : handleClose();
  };
  const handleOpen = () => {
    setPopoverVisible(true);
  };
  const handleClose = () => {
    setPopoverVisible(false);
  };

  return (
    <Popover
      content={
        <div className={css['popover-content']}>
          <Typography.Text strong fontSize="14px">
            {I18n.t('wf_testrun_ai_button_popover')}
          </Typography.Text>
          <RadioGroup
            direction="vertical"
            className={css['radio-group']}
            value={value}
            mode="advanced"
            type="pureCard"
            onChange={e => handleChange(e.target.value)}
          >
            <Radio
              value={GenerateMode.Complete}
              extra={I18n.t('wf_testrun_ai_button_popover_complete_extra')}
            >
              {I18n.t('wf_testrun_ai_button_popover_complete')}
            </Radio>
            <Radio
              value={GenerateMode.Cover}
              extra={I18n.t('wf_testrun_ai_button_popover_cover_extra')}
            >
              {I18n.t('wf_testrun_ai_button_popover_cover')}
            </Radio>
          </RadioGroup>
        </div>
      }
      trigger="custom"
      visible={popoverVisible}
      onVisibleChange={handleToggle}
      onClickOutSide={handleClose}
    >
      <AIButton
        onlyIcon
        color="aihglt"
        size="small"
        icon={
          <IconCozArrowDown
            className={popoverVisible ? css.opened : undefined}
          />
        }
        onClick={handleOpen}
        {...props}
      />
    </Popover>
  );
};
