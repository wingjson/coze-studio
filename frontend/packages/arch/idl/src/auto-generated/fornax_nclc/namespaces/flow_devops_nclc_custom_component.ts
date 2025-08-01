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
 
// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

import * as base from './base';

export type Int64 = string | number;

export enum ComponentCreateStatus {
  Undefined = 0,
  /** 创建中 */
  Creating = 1,
  /** 创建成功 */
  CreateSuccess = 2,
  /** 创建失败 */
  CreateFailed = 3,
}

export enum ComponentLanguage {
  Undefined = 0,
  Go = 1,
}

export enum ComponentReleaseStatus {
  Undefined = 0,
  /** 发布中 */
  InRelease = 1,
  /** 发布成功 */
  ReleaseSuccess = 2,
  /** 发布失败 */
  ReleaseFailed = 3,
}

/** 组件类型枚举 */
export enum ComponentType {
  Undefined = 0,
  ChatModel = 1,
  ToolAgent = 2,
}

export interface ComponentTemplateInfo {
  /** 模板名称 */
  name?: string;
  /** 模板描述 */
  description?: string;
  /** 组件类型 */
  type?: ComponentType;
  /** 模板语言 */
  language?: ComponentLanguage;
}

export interface CreateCustomComponentRequest {
  'FlowDevops-Agw-UserId'?: string;
  space_id: Int64;
  /** 组件信息 */
  component?: CustomComponent;
  'X-Jwt-Token'?: string;
  base?: base.Base;
}

export interface CreateCustomComponentResponse {
  component_id: Int64;
  base_resp?: base.BaseResp;
}

export interface CustomComponent {
  /** Component ID */
  id?: Int64;
  /** 唯一标识 */
  component_key?: string;
  /** Component名称 */
  display_name?: string;
  /** Component描述 */
  description?: string;
  /** Component类型 */
  component_type?: ComponentType;
  /** 创建者ID */
  creator_id?: Int64;
  /** 创建时间 */
  create_tsms?: Int64;
  /** 更新时间 */
  update_tsms?: Int64;
  /** 状态 */
  status?: ComponentCreateStatus;
  /** 版本 */
  version?: string;
  /** 组件实现语言 */
  language?: ComponentLanguage;
  /** 组件图标 */
  icon?: Icon;
  /** 组件仓库地址 */
  repo?: string;
  /** 组件Cloud IDE Workspace信息 */
  workspace_info?: WorkspaceInfo;
}

export interface CustomComponentReleaseRecord {
  /** Component Release ID */
  release_id?: Int64;
  /** Component ID */
  component_id?: Int64;
  /** 组件版本 */
  component_version?: string;
  /** 组件版本对应的codebase Tag */
  tag?: string;
  /** 版本描述 */
  description?: string;
  /** 发布人 */
  creator_id?: Int64;
  /** 创建时间 */
  create_tsms?: Int64;
  /** 更新时间 */
  update_tsms?: Int64;
  /** 版本发布状态 */
  status?: ComponentReleaseStatus;
  /** 错误信息 */
  err_info?: ErrInfo;
}

export interface DeleteCustomComponentRequest {
  'FlowDevops-Agw-UserId'?: string;
  /** 空间ID */
  space_id: Int64;
  /** Component ID */
  component_id: Int64;
  'X-Jwt-Token'?: string;
  base?: base.Base;
}

export interface DeleteCustomComponentResponse {
  base_resp?: base.BaseResp;
}

export interface ErrInfo {
  /** 错误码 */
  code?: number;
  /** 错误信息 */
  message?: string;
  log_id?: string;
}

export interface GetCustomComponentReleaseRecordRequest {
  'FlowDevops-Agw-UserId'?: string;
  /** 空间ID */
  space_id: Int64;
  /** Component ID */
  component_id: Int64;
  release_id: Int64;
  base?: base.Base;
}

export interface GetCustomComponentReleaseRecordResponse {
  /** 组件版本发布信息 */
  release_record?: CustomComponentReleaseRecord;
  base_resp?: base.BaseResp;
}

export interface GetCustomComponentRequest {
  'FlowDevops-Agw-UserId'?: string;
  /** 空间ID */
  space_id: Int64;
  /** Component ID */
  component_id: Int64;
  base?: base.Base;
}

export interface GetCustomComponentResponse {
  /** 组件信息 */
  component?: CustomComponent;
  base_resp?: base.BaseResp;
}

export interface Icon {
  /** frontend -> backend */
  uri?: string;
  /** backend -> frontend */
  url?: string;
}

export interface IDELaunchRequest {
  'FlowDevops-Agw-UserId'?: string;
  /** 空间ID */
  space_id: Int64;
  'X-Jwt-Token': string;
  base?: base.Base;
}

export interface IDELaunchResponse {
  /** 组件Cloud IDE Workspace信息 */
  workspace_info?: WorkspaceInfo;
  /** 是否有cloud ide权限 */
  has_auth?: boolean;
  base_resp?: base.BaseResp;
}

export interface IsComponentKeyValidRequest {
  'FlowDevops-Agw-UserId'?: string;
  /** 空间ID */
  space_id: Int64;
  /** 组件标识 */
  component_key: string;
  base?: base.Base;
}

export interface IsComponentKeyValidResponse {
  /** component_key是否有效 */
  is_valid?: boolean;
  base_resp?: base.BaseResp;
}

export interface ListComponentTemplateInfoRequest {
  'FlowDevops-Agw-UserId'?: string;
  /** 空间ID */
  space_id: Int64;
  base?: base.Base;
}

export interface ListComponentTemplateInfoResponse {
  /** 组件模板信息 */
  component_templates?: Array<ComponentTemplateInfo>;
  base_resp?: base.BaseResp;
}

export interface ListCustomComponentReleaseRecordRequest {
  'FlowDevops-Agw-UserId'?: string;
  /** 空间ID */
  space_id: Int64;
  /** Component ID */
  component_id: Int64;
  page?: Int64;
  page_size?: Int64;
  base?: base.Base;
}

export interface ListCustomComponentReleaseRecordResponse {
  component_release_records?: Array<CustomComponentReleaseRecord>;
  total?: Int64;
  base_resp?: base.BaseResp;
}

export interface ListCustomComponentRequest {
  'FlowDevops-Agw-UserId'?: string;
  /** 空间ID */
  space_id: Int64;
  page?: Int64;
  page_size?: Int64;
  /** 模糊搜索
name/key模糊匹配 */
  key_word?: string;
  /** 创建者ID */
  creator_i_d?: Int64;
  base?: base.Base;
}

export interface ListCustomComponentResponse {
  /** 组件信息 */
  components?: Array<CustomComponent>;
  total?: Int64;
  base_resp?: base.BaseResp;
}

export interface ListSupportComponentTypeRequest {
  'FlowDevops-Agw-UserId'?: string;
  space_id: Int64;
  page?: Int64;
  page_size?: Int64;
  base?: base.Base;
}

export interface ListSupportComponentTypeResponse {
  /** 组件类型 */
  component_types?: Array<ComponentType>;
  total?: Int64;
  base_resp?: base.BaseResp;
}

export interface ReleaseCustomComponentRequest {
  /** Component ID */
  component_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  /** 空间ID */
  space_id: Int64;
  /** 组件版本发布信息 */
  component_release?: CustomComponentReleaseRecord;
  'X-Jwt-Token'?: string;
  base?: base.Base;
}

export interface ReleaseCustomComponentResponse {
  release_id: Int64;
  base_resp?: base.BaseResp;
}

export interface UpdateCustomComponentRequest {
  'FlowDevops-Agw-UserId'?: string;
  /** 空间ID */
  space_id: Int64;
  /** Component ID */
  component_id: Int64;
  component?: CustomComponent;
  base?: base.Base;
}

export interface UpdateCustomComponentResponse {
  base_resp?: base.BaseResp;
}

export interface WorkspaceInfo {
  /** cloudide workspace id */
  workspace_id?: string;
  /** cloudide workspace url */
  workspace_url?: string;
  /** workspace 登陆状态 */
  workspace_launched?: boolean;
}
/* eslint-enable */
