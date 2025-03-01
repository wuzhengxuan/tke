/*
 * Tencent is pleased to support the open source community by making TKEStack
 * available.
 *
 * Copyright (C) 2012-2021 Tencent. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 * this file except in compliance with the License. You may obtain a copy of the
 * License at
 *
 * https://opensource.org/licenses/Apache-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OF ANY KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations under the License.
 */
import { Identifiable } from '@tencent/ff-redux';

export interface SubRouter extends Identifiable, BasicRouter {
  /** 是否有二级导航 */
  sub?: BasicRouter[];
}

export interface BasicRouter {
  /** 路由的名称 */
  name: string;

  /** 路由的路径 */
  path?: string;

  /** 非嵌套路由需要标识一个basic */
  basicUrl?: string;
}

export interface SubRouterFilter {
  /** 模块名称 */
  module: 'cluster' | 'mesh';
  /** sub 一级路由的名称 */
  sub: string;
}
