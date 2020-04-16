import { QueryOption } from './config-option-query';

export const Pagination = async (repositoryModel, options: QueryOption) => {
  if (options.field) {
    let res = await repositoryModel
      .find(
        { [options.field]: { $regex: `.*${options.text}*.` } },
        (er, doc) => {
          return doc;
        },
      )
      .skip(Number(options.page))
      .limit(Number(options.limit))
      .exec();
    return { res, total: res.length };
  } else {
    let res = await repositoryModel
      .find()
      .skip(Number(options.page))
      .limit(Number(options.limit))
      .exec();
    return { res, total: res.length };
  }
};


