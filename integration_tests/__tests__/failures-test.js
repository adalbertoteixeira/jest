/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

const path = require('path');
const runJest = require('../runJest');

it('failure messages', () => {
  const dir = path.resolve(__dirname, '../failures');
  const {stdout} = runJest(dir);
  expect(stdout).toMatchSnapshot();
});
