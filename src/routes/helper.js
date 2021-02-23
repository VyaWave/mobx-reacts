const data = [
  {
    qdCommunityId: "4",
    communityId: "10004",
    communityCode: "4",
    orgId: "1",
    name: "紫金新干线二区",
    pinyinName: "1",
    shortPinyinName: "1",
    bindingAddress: "1",
    centerPhone: "1",
    innerId: "1",
    provinceId: "1",
    cityId: "1",
    areaId: "1",
    address: "1",
    remark: "",
    qrCodeUrl: "1",
    tenantId: "999999999",
    sort: "1",
    creator: "1",
    ctime: "1",
    utime: "1",
    btime: "1611144411340",
    etime: null,
    key: "10004",
    title: "紫金新干线二区",
    children: [
      {
        spaceId: "1364101982329692160",
        spaceCode: "",
        name: "紫金新干线二区/开发测试---勿删",
        pinyinName: "kaifaceshi---wushan",
        shortPinyinName: "kfcs---ws",
        spaceType: "2",
        isPublic: "0",
        isBusiness: "0",
        communityId: "10004",
        parentId: "10004",
        key: "1364101982329692160",
        title: "开发测试---勿删",
      },
      {
        spaceId: "1364109160088264704",
        spaceCode: "",
        name: "紫金新干线二区/2号楼",
        pinyinName: "2haolou",
        shortPinyinName: "2hl",
        spaceType: "2",
        isPublic: "0",
        isBusiness: "0",
        communityId: "10004",
        parentId: "10004",
        key: "1364109160088264704",
        title: "2号楼",
        children: [
          {
            spaceId: "1364110022256812032",
            spaceCode: "",
            name: "紫金新干线二区/2号楼/1单元",
            pinyinName: "1danyuan",
            shortPinyinName: "1dy",
            spaceType: "3",
            isPublic: "0",
            isBusiness: "0",
            communityId: "10004",
            parentId: "1364109160088264704",
            key: "1364110022256812032",
            title: "1单元",
            children: [],
            path: "1单元",
          },
        ],
        path: "2号楼",
      },
    ],
    path: "紫金新干线二区",
  },
];

const modifyArray = (source, spaceId) => {
  let passed = false;

  while (!passed) {
    source.forEach((item) => {
      console.info("item", item);
      if (item.children && Array.isArray(item.children)) {
        const existed = item.children.find((it) => it.spaceId === spaceId);

        if (existed) {
          passed = true;
          item.children = item.children.filter((it) => it.spaceId === spaceId);
          return source;
        } else {
          return modifyArray(item.children, spaceId);
        }
      } else {
        console.warn("no valid children");
      }
    });
  }
};

const getValidData = (sourceArr, spaceId) => {};
