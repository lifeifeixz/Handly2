var resource = `INSERT INTO menu (
  PermissionID,
  Show_Name,
  Path,
  Component,
  ParentID,
  Leaf,
  POSITION,
  PlatformID,
  NAME
) VALUE (
  '$CODE',
  '$showName',
  '$path',
  '$component',
  $parentId,
  '$leaf',
  '$position',
  5,
  '$NAME'
) ;

INSERT INTO auth (\`Code\`, \`Name\`, \`Desc\`, \`Status\`) 
VALUES
  (
    '$CODE',
    '$showName',
    '$showName',
    'ENABLED'
  ) ;

  
  

INSERT INTO platform_auth (platform_id, auth_id,create_datetime, create_by) 
VALUES
  (
    5,
    (SELECT 
      AuthID 
    FROM
      AUTH 
    WHERE CODE = '$CODE'),
    '2018-11-20 14:08:37',
    1
  ) ;

  INSERT INTO role_auth 
  VALUES
    (10,
    (SELECT 
      AuthID 
    FROM
      AUTH 
    WHERE CODE = '$CODE'),'2018-11-20 14:08:37',414123231,NULL,NULL)
       `;