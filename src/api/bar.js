import request from "@/util/request";

export function getBar(index = 1) {
  return request({
    url: `/antdpro-express/api/list/data/7/?current=1&pageSize=2000&typeName=bar${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/bar" + index + ".json",
  //   method: "get",
  // });
}
