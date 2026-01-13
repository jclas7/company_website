import React from "react";

function AdminPosts(props) {
  const dummyPosts = [
    {
      _id: "1",
      title: "첫 번째 게시글",
      content: "이것은 첫 번째 게시글 내용입니다.",
      views: 123,
      fileUrl: ["https://example.com/file1.pdf"],
      createdAt: "2023-12-01T12:00:00Z",
      updatedAt: "2023-12-02T15:30:00Z",
    },
    {
      _id: "2",
      title: "두 번째 게시글",
      content: "두 번째 게시글 내용입니다.",
      views: 456,
      fileUrl: [
        "https://example.com/file2.pdf",
        "https://example.com/file3.pdf",
      ],
      createdAt: "2023-12-03T10:00:00Z",
      updatedAt: "2023-12-03T18:45:00Z",
    },
    {
      _id: "3",
      title: "세 번째 게시글",
      content: "세 번째 게시글 내용입니다.",
      views: 789,
      fileUrl: [],
      createdAt: "2023-12-05T09:00:00Z",
      updatedAt: "2023-12-05T14:30:00Z",
    },
  ];

  return (
    <div className="p-4 mx-auto max-w-[1700px]">
      <h1 className="text-4xl font-bold mt-6 mb-4 ">게시글 관리</h1>
      <div className="mb-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex w-full md:w-auto gap-2">
          <select className="border rounded px-3 py-2 text-base">
            <option value="name">이름</option>
            <option value="email">글 내용</option>
          </select>
          <div className="flex-1 md:w-80">
            <input
              type="text"
              placeholder="검색을 입력하시오"
              className="w-full border rounded px-3 py-2 text-base"
            />
          </div>
        </div>
        <a
          href="#"
          className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-center"
        >
          추가하기
        </a>
      </div>
      <div className="mb-4">
        <div className="text-lg font-bold text-gray-600">총 0개의 게시물</div>
      </div>

      <div className="hidden md:block overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">번호</th>
              <th className="px-4 py-3 text-left">제목</th>
              <th className="px-4 py-3 text-left">내용</th>
              <th className="px-4 py-3 text-left">조회수</th>
              <th className="px-4 py-3 text-left">파일</th>
              <th className="px-4 py-3 text-left">작성일</th>
              <th className="px-4 py-3 text-center">수정일</th>
              <th className="px-4 py-3 text-center">수정일</th>
            </tr>
          </thead>
          <tbody>
            {dummyPosts.map((contact, index) => (
              <tr key={contact.id} className="border-b">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{contact.title}</td>
                <td className="px-4 py-3">{contact.content}</td>
                <td className="px-4 py-3">{contact.views}</td>
                <td className="px-4 py-3">
                  {contact.fileUrl > 0 ? (
                    contact.fileUrl.map((file, index) => (
                      <button
                        key={index}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm rounded-md transition-all
                duration-300 border border-gray-200 hover:border-gray-300 mr-2"
                      >
                        파일{index + 1}
                      </button>
                    ))
                  ) : (
                    <span className="text-gray-500">없음</span>
                  )}{" "}
                </td>
                <td className="px-4 py-3">
                  {new Date(contact.createdAt).toLocaleString()}
                </td>
                <td className="px-4 py-3">
                  {new Date(contact.updatedAt).toLocaleString()}
                </td>
                {/* <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      contact.status === "대기중"
                        ? "bg-blue-100 text-blue-800"
                        : contact.status === "진행중"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {contact.status}
                  </span>
                </td> */}
                <td className="px-4 py-3">
                  <div className="flex justify-end space-x-2">
                    <button className="px-3 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600">
                      수정
                    </button>
                    <button className="px-3 py-1.5 bg-red-500 text-white rounded hover:bg-red-600">
                      수정
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 gap-4 md:hidden ">
        {dummyPosts.map((contact, index) => (
          <div
            key={contact.id}
            className="p-4 border rounded-lg bg-white shadow-md"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">{contact.title}</h2>
              <span className="text-gray-500 text-sm">#{index + 1}</span>
            </div>
            <p className="text-gray-600 mb-4">{contact.content}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {contact.fileUrl.length > 0 ? (
                contact.fileUrl.map((url, index) => (
                  <div>
                    <button key={index}>파일{index + 1}</button>
                  </div>
                ))
              ) : (
                <span className="text-gray-500">첨부파일 없음</span>
              )}
            </div>
            <div className="text-sm text-gray-500">
              <div>조회수: {contact.views}</div>
              <div>작성일: {new Date(contact.createdAt).toLocaleString()}</div>
              <div>수정일: {new Date(contact.updatedAt).toLocaleString()}</div>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <button className="px-3 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600">
                수정
              </button>
              <button className="px-3 py-1.5 bg-red-500 text-white rounded hover:bg-red-600">
                수정
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPosts;
