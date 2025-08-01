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
 
const DOMAIN_REGEXP = /^([0-9a-zA-Z-]{1,}\.)+([a-zA-Z]{2,})$/;

export function isValidUrl(url: string): boolean {
  try {
    // cp-disable-next-line
    const urlObject = new URL(`https://${url}`);
    return DOMAIN_REGEXP.test(urlObject.hostname);
    // eslint-disable-next-line @coze-arch/use-error-in-catch -- 根据函数功能无需 throw error
  } catch {
    return false;
  }
}

// cp-disable-next-line
export const getUrlValue = (url: string) => url?.replace(/^https:\/\//, '');
